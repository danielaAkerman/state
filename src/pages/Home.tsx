import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext, Suspense } from "react";
import { useUsername } from "hooks";
// import { MyContext } from "index";


export function Home() {
  // const [user, setUser] = useRecoilState(userAtom);
  // const data = useContext(MyContext);
  // const username = useRecoilValue(usernameState);
  const username = useUsername()
  console.log("home", username);
  return (
    <div>
      <h4>{username}</h4>
    </div>
  );
}
