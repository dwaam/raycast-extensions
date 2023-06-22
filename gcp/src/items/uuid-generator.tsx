import Chance from "chance";
import { Action, ActionPanel, List } from "@raycast/api";

export default function UUIDGenerator(): JSX.Element {
  return (
    <List.Item
      title="UUID"
      subtitle="Generate an UUID"
      actions={
        <ActionPanel title="Generate an UUID">
          <Action.CopyToClipboard title="Copy generated UUID to clipboard" content={new Chance().guid()} />
        </ActionPanel>
      }
    />
  );
}
