import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";
import { useUsername } from "hooks";

// export const MyContext = React.createContext({ username: "" });

function App() {
  return (
    <RecoilRoot>
      <Suspense>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  );
}

ReactDOM.render(<App />, document.getElementById("hello-example"));
