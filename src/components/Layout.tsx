import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm";
import { useUsername } from "../hooks";

export function Layout() {
  const username = useUsername();
  return (
    <div>
      <header>Header {username}</header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </div>
  );
}
