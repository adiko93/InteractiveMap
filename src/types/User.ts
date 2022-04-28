import { Map } from "./Map";

export interface User {
  id?: string;
  username?: string;
  name?: string;
  email?: string;
  image?: string;
  createdAt?: Date;
  mapsCreated?: Map[];
  editorAt?: Map[];
  userAt?: Map[];
}
