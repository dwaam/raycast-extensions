import { ActionPanel, Action, getPreferenceValues, List } from "@raycast/api";
import { runAppleScript } from "run-applescript";

interface ProjectPreferences {
  projects: string;
}

interface Application {
  name: string;
  path: string;
  tags: string[];
  application: string;
}

interface Project {
  scope: string;
  icon: string;
  functionalDomain: string;
  applications: Application[];
}

const preferences = getPreferenceValues<ProjectPreferences>();

export default async function ListProjects(): Promise<JSX.Element> {
  const projects: Project[] = JSON.parse(preferences.projects);
  //
  // await runAppleScript(`
  //   tell application "System Events"
  //     tell process "WebStorm"
  //         name of every application of WebStorm
  //     end tell
  //   end tell
  // `);

  return (
    <List>
      {projects.map((project) => (
        <List.Section title={project.scope} key={`${project.scope}-${project.functionalDomain}`}>
          {project.applications.map((application) => (
            <List.Item
              key={`${project.scope}-${project.functionalDomain}-${application.name}`}
              icon={`icons/${application.application}.svg`}
              title={application.name}
              keywords={application.tags}
              actions={
                <ActionPanel>
                  <Action.Open
                    target={application.path}
                    title={`Open with ${application.application}`}
                    application={application.application}
                  />
                </ActionPanel>
              }
            ></List.Item>
          ))}
        </List.Section>
      ))}
    </List>
  );
}
