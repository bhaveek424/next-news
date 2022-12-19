import fetch from "node-fetch";
import { Post, EntityId } from "../shared/types";
import { config } from "./config";

export async function fetchCategory(categoryId: EntityId): Promise<Post[]> {
  const url = `${config.baseUrl}/categories/${categoryId}`;
  const res = await fetch(url);
  return (await res.json()) as Promise<Post[]>;
}
