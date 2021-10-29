import React, { useEffect } from "react";
import { userId } from "../services/authorization/auth";
import { UserServices } from "../services/users/users";

export const Admin = () => {
  const id = userId.get();
  const geet = UserServices.getUserBoard(id);
  console.log(geet);
  useEffect(() => {
    UserServices.getUserBoard(id).then((r) => {
    });
  }, [id]);
  return (
    <>
      {/* {data.map((user) => (
        <>
          <p>{user._id}</p>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.email}</p>
        </>
      ))} */}
    </>
  );
};
