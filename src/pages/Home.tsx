import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useUsername } from "hooks";
import { MyContext } from "index";

export function Home() {
  const data = useContext(MyContext);
  console.log("home", data.username);
  return (
    <div>
      <h4>{data.username}</h4>
    </div>
  );
}
