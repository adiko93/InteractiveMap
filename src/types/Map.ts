import { Folder } from "./Folder";
import { User } from "./User";

export interface Map {
  id?: string;
  createdBy?: User;
  createdById?: string;
  name?: string;
  description?: string;
  color?: string;
  icon?: string;
  rootFolder?: Folder;
  folders?: Folder[];
  editors?: User[];
  users?: User[];
}
