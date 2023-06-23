import { List } from "@raycast/api";

import VersionSection from "./version-list";
import { Environment } from "../interfaces/environment.interfaces";
import { BusinessUnit } from "../interfaces/business-unit.interfaces";
import { PROJECTS } from "../deployer.constants";

export default function Projects(props: { environment: Environment; businessUnit: BusinessUnit }) {
  const navigationTitle = `${props.environment.name} / ${props.businessUnit.name}`;

  return (
    <List navigationTitle={navigationTitle}>
      {PROJECTS.map((project) => (
        <VersionSection
          key={project.name}
          environment={props.environment}
          businessUnit={props.businessUnit}
          project={project}
        />
      ))}
    </List>
  );
}
