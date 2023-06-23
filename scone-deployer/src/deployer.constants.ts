import { Environment } from "./interfaces/environment.interfaces";
import { BusinessUnit } from "./interfaces/business-unit.interfaces";
import { Project } from "./interfaces/project.interfaces";

export const ENVIRONMENTS: Environment[] = [
  {
    code: "qa",
    name: "QA",
  },
  {
    code: "sit",
    name: "SIT",
  },
  {
    code: "uat1",
    name: "UAT",
  },
];

export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    code: "asfr",
    name: "AS FR",
    image: "adeo.png",
  },
  {
    code: "lmfr",
    name: "LM FR",
    image: "france.png",
  },
  {
    code: "lmit",
    name: "LM IT",
    image: "italy.png",
  },
  {
    code: "lmpt",
    name: "LM PT",
    image: "portugal.png",
  },
];

export const PROJECTS: Project[] = [
  {
    name: "scone",
    deployWorkflowId: 23411378,
  },
  {
    name: "scone-api",
    deployWorkflowId: 12766288,
  },
  {
    name: "scone-batch-gcp",
    deployWorkflowId: 13121502,
  },
];
