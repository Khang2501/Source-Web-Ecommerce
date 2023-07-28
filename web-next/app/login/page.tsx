"use client";

import { useState } from "react";
// import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import postLogin from "@/lib/postLogin";
import setCookies from "@/lib/setCookies";
import classes from "./login.module.scss";
import Input from "./components/Input";

export default function page() {
  const [dataLogin, setDataLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: false, password: false });

  const router = useRouter();

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

    const responeData = await postLogin(dataLogin);
    const data = await responeData.json();

    if (responeData.status === 203) {
      const errData = { ...error };
      data.map((err: { path: string }) => {
        if (err.path === "email") {
          errData.email = true;
        }
        if (err.path === "password") {
          errData.password = true;
        }
      });
      setError(errData);
    }
    if (responeData.status === 202) {
      setCookies(data.token, data.userName, dataLogin.email);
      router.push("/");
    }
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
              router.push("/register");
            }}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
