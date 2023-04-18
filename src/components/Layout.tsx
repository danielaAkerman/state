import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { SearchForm } from "./SearchForm";
import { useUsername } from "../hooks";
import { MyContext } from "index";

export function Layout() {
  const data = useContext(MyContext);
  console.log("layout", data.username);
  return (
    <div>
      <header>Header {data.username}</header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </div>
  );
}
