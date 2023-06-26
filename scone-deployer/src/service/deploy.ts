import { Octokit } from "octokit";
import { getPreferenceValues, showToast, Toast, useNavigation } from "@raycast/api";

import { Project } from "../interfaces/project.interfaces";
import { Environment } from "../interfaces/environment.interfaces";
import { BusinessUnit } from "../interfaces/business-unit.interfaces";

export async function deploy(version: string, project: Project, environment: Environment, businessUnit: BusinessUnit) {
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
      title: `The application failed to deploy with version ${version}.`,
      message: JSON.stringify(error),
    });
  }
}
