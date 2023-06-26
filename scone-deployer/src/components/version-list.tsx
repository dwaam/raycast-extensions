import { usePromise } from "@raycast/utils";
import { Octokit } from "octokit";
import { ActionPanel, Action, List, getPreferenceValues, useNavigation } from "@raycast/api";

import { BusinessUnit } from "../interfaces/business-unit.interfaces";
import { Environment } from "../interfaces/environment.interfaces";
import { Project } from "../interfaces/project.interfaces";
import SelectVersion from "./select-version";
import { deploy } from "../service/deploy";
import Command from "../index";

export default function VersionSection(props: {
  project: Project;
  businessUnit: BusinessUnit;
  environment: Environment;
}) {
  const { push } = useNavigation();

  const octokit = new Octokit({
    auth: getPreferenceValues<Preferences>().githubToken,
  });

  const { isLoading, data } = usePromise(async () => {
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
                  onAction={() =>
                    deploy(tag.name, props.project, props.environment, props.businessUnit).then(() => push(<Command />))
                  }
                />
              </ActionPanel>
            }
          />
        ))}
      {!isLoading && (
        <List.Item
          icon="question.png"
          title="Choose your version"
          key={`${props.project.name}-undefined`}
          actions={
            <ActionPanel>
              <Action.Push
                title="Choose the version to deploy"
                target={
                  <SelectVersion
                    environment={props.environment}
                    businessUnit={props.businessUnit}
                    project={props.project}
                  />
                }
              />
            </ActionPanel>
          }
        />
      )}
    </List.Section>
  );
}
