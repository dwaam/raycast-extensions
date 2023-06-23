import { Action, ActionPanel, List } from "@raycast/api";

import Projects from "./projects";
import { BUSINESS_UNITS } from "../deployer.constants";
import { Environment } from "../interfaces/environment.interfaces";

export default function BusinessUnit(props: { environment: Environment }) {
  return (
    <List searchBarPlaceholder="Choose your business unit" navigationTitle={props.environment.name}>
      {BUSINESS_UNITS.map((businessUnit) => (
        <List.Item
          icon={businessUnit.image}
          title={businessUnit.name}
          key={businessUnit.code}
          actions={
            <ActionPanel>
              <Action.Push
                title="Select the project to deploy"
                target={<Projects environment={props.environment} businessUnit={businessUnit} />}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
