import {Links} from "../../types/links";

export interface Category {
  id: bigint;
  name: string;
  _links?: Links;
}
