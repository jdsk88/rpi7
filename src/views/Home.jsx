import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Home = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <button> delete token</button>
      <button> delete token</button>
      <button> delete token</button>
      <button> delete token</button>
      <button> delete token</button>
      <button> delete token</button>
    </>
  );
};
