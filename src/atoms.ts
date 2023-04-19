import React from "react";
import { atom, selector } from "recoil";

const userAtom = atom({
  key: "user", // unique ID (with respect to other atoms/selectors)
  default: {
    username: "Lucy",
    tamaño: "pequeño",
    id: 2,
  }, // default value (aka initial value)
});

const usernameState = selector({
  key: "username", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    //   const user = get(userAtom);
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();

    return data.name;
  },
});

export { usernameState };
