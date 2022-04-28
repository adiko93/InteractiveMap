import { IconName, MaybeElement } from "@blueprintjs/core";
import { Color } from "react-color";
import { Entity } from "./Entity";
import { Map } from "./Map";

export interface Folder {
  id?: string;
  name?: string;
  description?: string;
  color?: Color;
  icon?: IconName;
  parentId?: string;
  mapId?: string;
  entities?: Entity[];
  childs?: Folder[];
  parent?: Folder;
  map?: Map;
}
