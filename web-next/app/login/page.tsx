"use client";

import { useState } from "react";
import classes from "./login.module.scss";
import Input from "./components/Input";
import postLogin from "@/lib/postLogin";
type Props = {};

export default function page({}: Props) {
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: false, password: false });

  const emailInputChangHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.placeholder === "Email") {
      setDataLogin(() => ({
        ...dataLogin,
        email: e.target.value,
      }));
      setError(() => ({ ...error, email: false }));
    }
    if (e.target.placeholder === "Password") {
      setDataLogin(() => ({
        ...dataLogin,
        password: e.target.value,
      }));
      setError(() => ({ ...error, password: false }));
    }
  };
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("run");
    const responeData = await postLogin(dataLogin);
    const data = await responeData;
    console.log(data.status);
  }

  return (
    <div className={classes.register}>
      <img
        className={classes["register_logo"]}
        src={"/img/logo_lock.png"}
        alt="logo"
      />
      <form
        onSubmit={submitHandler}
        className={`${classes["form_register"]} ${classes["form_login"]}`}
      >
        <h1>Sign In</h1>
        <Input
          last={false}
          cb={emailInputChangHandler}
          type={"email"}
          placeholder={"Email"}
          err={error.email}
        />
        <Input
          last={true}
          cb={emailInputChangHandler}
          type={"password"}
          placeholder={"Password"}
          err={error.password}
        />

        <button>SIGN IN</button>
        <p>
          Create an account?
          <span
            onClick={() => {
              //   navigate("/register");
            }}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
