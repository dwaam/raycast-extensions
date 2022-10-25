import Chance from "chance";

import { Action, ActionPanel, List } from "@raycast/api";

export default function CountryGenerator(): JSX.Element {
  return (
    <List.Item
      title="Country"
      subtitle="Generate a country"
      actions={
        <ActionPanel title="Generate a country">
          <Action.CopyToClipboard
            title="Copy generated country to clipboard"
            content={new Chance().country({ full: true })}
          />
        </ActionPanel>
      }
    />
  );
}
