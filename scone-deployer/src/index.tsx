import { ActionPanel, Detail, List, Action } from "@raycast/api";

const ENVIRONMENTS = [
  {
    code: 'qa',
    name: 'QA'
  },
  {
    code: 'sit',
    name: 'SIT'
  },
  {
    code: 'uat1',
    name: 'UAT'
  },
];

const BUSINESS_UNITS = [
  {
    code: 'asfr',
    name: 'ASFR'
  },
  {
    code: 'lmfr',
    name: 'LM FR'
  },
  {
    code: 'lmit',
    name: 'LM IT'
  },
  {
    code: 'lmpt',
    name: 'LM PT'
  },
];

export default function Command() {
  return (
    <List>
      {
        ENVIRONMENTS.map((environment) => (<List.Item
          icon="list-icon.png"
          title={environment.name}
          key={environment.code}
          actions={
            <ActionPanel>
              <Action.Push title="Show Details" target={<Detail markdown="# Hey! 👋" />} />
            </ActionPanel>
          }
        />))
      }
    </List>
  );
}
