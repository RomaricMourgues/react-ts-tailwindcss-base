import { useFetch } from "@features/utils";
import { Something } from "../types/something";

export class SomethingApiClient {
  static getSomething = async (): Promise<Something[]> => {
    const response = await useFetch(`/api/something`, {
      method: "GET",
    });
    const data = await response.json();
    return data as Something[];
  };
}
