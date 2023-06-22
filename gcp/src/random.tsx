import { List } from "@raycast/api";

import CityGenerator from "./items/city-generator";
import UUIDGenerator from "./items/uuid-generator";
import AddressGenerator from "./items/address-generator";
import CountryGenerator from "./items/country-generator";

export default function Command(): JSX.Element {
  return (
    <List>
      <UUIDGenerator />
      <List.Section title="Address">
        <AddressGenerator />
        <CityGenerator />
        <CountryGenerator />
      </List.Section>
    </List>
  );
}
