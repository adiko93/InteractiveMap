import { enumType } from "nexus";

export const EntityType = enumType({
  name: "EntityType",
  members: ["MARKER", "AREA", "PATH"],
  description: "Types of entities",
});
