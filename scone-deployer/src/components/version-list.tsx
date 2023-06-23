import { usePromise } from "@raycast/utils";
import { Octokit } from "octokit";
import { ActionPanel, Action, List, showToast, Toast, getPreferenceValues } from "@raycast/api";

import { BusinessUnit } from "../interfaces/business-unit.interfaces";
import { Environment } from "../interfaces/environment.interfaces";
import { Project } from "../interfaces/project.interfaces";

export default function VersionSection(props: {
  project: Project;
  businessUnit: BusinessUnit;
  environment: Environment;
}) {
  const octokit = new Octokit({
    auth: getPreferenceValues<Preferences>().githubToken,
  });

  const { isLoading, data, revalidate } = usePromise(async () => {
    const tags = await octokit.request("GET /repos/{owner}/{repo}/tags", {
      owner: "adeo",
      repo: props.project.name,
      per_page: 5,
    });

    return tags.data;
  });

  return (
    <List.Section title={props.project.name}>
      {!isLoading &&
        data?.map((tag) => (
          <List.Item
            icon="box.png"
            title={tag.name}
            key={tag.name}
            actions={
              <ActionPanel
                title={`Deploy ${props.project} with version ${tag.name} on ${props.environment.name} - ${props.businessUnit.name}`}
              >
                <Action
                  title={`Deploy ${tag.name}`}
                  onAction={() => deploy(tag.name, props.project, props.environment, props.businessUnit)}
                />
              </ActionPanel>
            }
          />
        ))}
    </List.Section>
  );
}

async function deploy(version: string, project: Project, environment: Environment, businessUnit: BusinessUnit) {
  const octokit = new Octokit({
    auth: getPreferenceValues<Preferences>().githubToken,
  });

  try {
    await octokit.request("POST /repos/{owner}/{repo}/actions/workflows/{workflowId}/dispatches", {
      owner: "adeo",
      repo: project.name,
      workflowId: project.deployWorkflowId,
      ref: "develop",
      inputs: {
        bu: businessUnit.code,
        env: environment.code,
        version,
      },
    });

    await showToast({
      style: Toast.Style.Success,
      title: "Application is being deployed.",
    });
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "The application failed to deploy.",
      message: JSON.stringify(error),
    });
  }
}
