import { ActionPanel, Form, Action, useNavigation } from "@raycast/api";

import { Environment } from "../interfaces/environment.interfaces";
import { BusinessUnit } from "../interfaces/business-unit.interfaces";
import { Project } from "../interfaces/project.interfaces";
import { deploy } from "../service/deploy";
import Command from "../index";

export default function SelectVersion(props: {
  environment: Environment;
  businessUnit: BusinessUnit;
  project: Project;
}) {
  const navigationTitle = `${props.environment.name} / ${props.businessUnit.name} / ${props.project}`;

  const { push } = useNavigation();

  return (
    <Form
      navigationTitle={navigationTitle}
      actions={
        <ActionPanel>
          <Action.SubmitForm
            title="Submit Name"
            onSubmit={(values) =>
              deploy(values.version, props.project, props.environment, props.businessUnit).then(() => push(<Command />))
            }
          />
        </ActionPanel>
      }
    >
      <Form.Description
        text={`Please insert the version number you want to deploy for the project ${props.project.name} on ${props.environment.name} ${props.businessUnit.name}`}
      />
      <Form.TextField
        id="version"
        info={`Please insert the version number you want to deploy for the project ${props.project.name} on ${props.environment.name} ${props.businessUnit.name}`}
        placeholder="X.X.X"
      />
    </Form>
  );
}
