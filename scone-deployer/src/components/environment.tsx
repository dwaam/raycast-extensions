import { ActionPanel, List, Action } from "@raycast/api";

import BusinessUnit from "./business-unit";
import { ENVIRONMENTS } from "../deployer.constants";

export default function Environment() {
  return (
    <List searchBarPlaceholder="Choose your environment">
      {ENVIRONMENTS.map((environment) => (
        <List.Item
          icon="list-icon.png"
          title={environment.name}
          key={environment.code}
          actions={
            <ActionPanel>
              <Action.Push title="Choose a Business Unit" target={<BusinessUnit environment={environment} />} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
