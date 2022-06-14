import { atom } from "recoil";
import { Something } from "../types/something";

export const SomethingState = atom<Something[]>({
  key: "SomethingState",

  //Put in cache, do not overuse ! Create a service to abstract this ?
  default: ((() => {
    try {
      return JSON.parse(localStorage.getItem("cache_SomethingState") || "[]");
    } catch (e) {}
  })() || []) as Something[],
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem("cache_SomethingState", JSON.stringify(newValue));
      });
    },
  ],
});
