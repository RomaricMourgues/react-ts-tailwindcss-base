import { LoadingState, useGlobalEffect } from "@features/utils";
import { useRecoilState, useRecoilValue } from "recoil";
import { SomethingApiClient } from "../api-client/api-client";
import { SomethingState } from "./store";
import _ from "lodash";

export const useSomething = () => {
  const [something, setSomething] = useRecoilState(SomethingState);
  const [loading, setLoading] = useRecoilState(LoadingState("useSomething"));

  const refresh = async () => {
    setLoading(true);
    const something = await SomethingApiClient.getSomething();
    setSomething(something);
    setLoading(false);
  };

  //Will be called once only
  useGlobalEffect(
    "useSomething",
    () => {
      refresh();
    },
    []
  );

  return { something, loading, refresh };
};
