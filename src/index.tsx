import React from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "./router";
import { BrowserRouter } from "react-router-dom";
import { useUsername } from "hooks";

export const MyContext = React.createContext({ username: "" });

function App() {
  const username = useUsername();
  return (
    <MyContext.Provider value={{ username }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("hello-example"));
