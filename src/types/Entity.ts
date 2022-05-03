import { IconName, MaybeElement } from "@blueprintjs/core";
import { Folder } from "./Folder";
import { User } from "./User";

export interface Entity {
  id?: string;
  type?: EntityType;
  name?: string;
  description?: string;
  image?: string;
  color?: string;
  icon?: IconName;
  position?: { values?: [] };
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: User;
  createdById?: string;
  updatedBy?: User;
  updatedById?: string;
  folder?: Folder;
}

export type EntityType = "MARKER" | "AREA" | "PATH";
