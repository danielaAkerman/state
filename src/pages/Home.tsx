import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useUsername } from "hooks";

export function Home() {
  const username = useUsername();


  return (
    <div>
      <h4>{username}</h4>
    </div>
  );
}
