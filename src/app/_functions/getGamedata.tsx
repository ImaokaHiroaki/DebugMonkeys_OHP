import { client } from "@/libs/client";
import { details } from "@/types/cms-types";

export async function getGameData(game: string): Promise<details | null> {
  try {
    return await client.get({
      endpoint: `details/${game}`,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}
