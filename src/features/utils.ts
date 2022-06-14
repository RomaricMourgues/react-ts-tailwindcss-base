import environment from "@config/environment";
import { isEqual } from "lodash";
import { useEffect } from "react";
import { atomFamily } from "recoil";

const globalEffectDepsMap = new Map<string, ReadonlyArray<any>>();

export const flushGlobalEffects = () => {
  globalEffectDepsMap.clear();
};

export const useGlobalEffect = (
  key: string,
  callback: Function,
  deps: ReadonlyArray<any>
) => {
  useEffect(() => {
    if (isEqual(globalEffectDepsMap.get(key), deps) === false) {
      globalEffectDepsMap.set(key, deps);
      return callback();
    }
  }, deps);
};

export const useFetch = async (
  url: string,
  options: { allowSandbox?: boolean } & RequestInit
): Promise<Response> => {
  if (!url.startsWith("http"))
    url = `${environment.server.replace(/\/$/, "")}/${url.replace(/^\//, "")}`;
  options.headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${""}`,
    ...options.headers,
  };
  const data = await fetch(url, options);
  if (data.status === 401) {
    document.location.reload();
  }
  return data;
};

export const LoadingState = atomFamily({
  key: "LoadingState",
  //It is possible to set here what loaders should init as loading
  default: (type: string) => ["useAuth"].includes(type) || false,
});
