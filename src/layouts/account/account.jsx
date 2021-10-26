import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PasswdReset } from "../../components/PasswdReset/PasswdReset";
import { SignIn } from "../../components/SignIn/SignIn";
import { SignUp } from "../../components/Signup/Signup";
import { routes } from "../../routes";

export const AccountLayout = () => {
  const [register, setRegister] = useState(false);
  const [reset, setReset] = useState(false);

  return (
    <>
      {register ? (
        <SignUp
          setRegister={setRegister}
          register={register}
          reset={reset}
          setReset={setReset}
        />
      ) : (
        <>
          {reset ? (
            <PasswdReset
              setRegister={setRegister}
              register={register}
              reset={reset}
              setReset={setReset}
            />
          ) : (
            <SignIn
              setRegister={setRegister}
              register={register}
              reset={reset}
              setReset={setReset}
            />
          )}
        </>
      )}
    </>
  );
};
