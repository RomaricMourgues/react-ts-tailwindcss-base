import { Route, Routes } from "react-router-dom";
import * as Text from "@atoms/text";
import { Alert } from "@atoms/alert";
import { CheckIcon } from "@heroicons/react/outline";

export default function InitialRouter() {
  return (
    <div className="min-h-full bg-blue-50 dark:bg-slate-900 select-none">
      <Routes>
        <Route
          path="*"
          element={
            <div className="m-auto max-w-xl relative top-40">
              <Alert
                icon={CheckIcon}
                theme="success"
                title="This base architecture works !"
              >
                <Text.BaseSmall noColor>Congratulations 💯</Text.BaseSmall>
              </Alert>
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}
