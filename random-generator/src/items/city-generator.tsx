import Chance from "chance";

import { Action, ActionPanel, List } from "@raycast/api";

export default function CityGenerator(): JSX.Element {
  return (
    <List.Item
      title="City"
      subtitle="Generate a city"
      actions={
        <ActionPanel title="Generate a city">
          <Action.CopyToClipboard title="Copy generated city to clipboard" content={new Chance().city()} />
        </ActionPanel>
      }
    />
  );
}
