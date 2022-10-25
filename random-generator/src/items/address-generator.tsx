import Chance from "chance";

import { Action, ActionPanel, List } from "@raycast/api";

export default function AddressGenerator(): JSX.Element {
  return (
    <List.Item
      title="Address"
      subtitle="Generate a address"
      actions={
        <ActionPanel title="Generate a address">
          <Action.CopyToClipboard
            title="Copy generated address to clipboard"
            content={new Chance().address({ full: true })}
          />
        </ActionPanel>
      }
    />
  );
}
