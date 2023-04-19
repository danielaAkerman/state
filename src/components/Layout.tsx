import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect, useContext, Suspense } from "react";
import { SearchForm } from "./SearchForm";
import { useUsername } from "../hooks";
// import { MyContext } from "index";

export function Layout() {
  // const [user, setUser] = useRecoilState(userAtom);
  // const data = useContext(MyContext);
  // const username = useRecoilValue(usernameState);
  const username = useUsername();
  console.log("layout", username);

  // function cambiarNombre(){
  //   setUserName("Lucía")
  // }
  return (
    <div>
      <header>Header {username}</header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </div>
  );
}
