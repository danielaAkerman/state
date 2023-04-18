import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export function SearchForm() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;
    console.log(query);
    navigate("/search/" + query, { replace : true });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="query" />
      <button>Buscar</button>
    </form>
  );
}
