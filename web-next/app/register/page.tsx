"use client";
import React, { useState } from "react";
import postRegister from "@/lib/postRegister";
import { useRouter } from "next/navigation";
import Input from "../login/components/Input";
import classes from "../login/login.module.scss";
type Props = {};

export default function page({}: Props) {
  const router = useRouter();
  const [error, setError] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
  });

  const [data, setData] = useState<Register>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const dataChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.placeholder === "Full Name") {
      setData(() => ({
        ...data,
        fullName: e.target.value,
      }));
      setError(() => ({ ...error, fullName: false }));
    }
    if (e.target.placeholder === "Password") {
      setData(() => ({
        ...data,
        password: e.target.value,
      }));
      setError(() => ({ ...error, password: false }));
    }
    if (e.target.placeholder === "Confirm Password") {
      setData(() => ({
        ...data,
        confirmPassword: e.target.value,
      }));
      setError(() => ({ ...error, confirmPassword: false }));
    }
    if (e.target.placeholder === "Phone") {
      setData(() => ({
        ...data,
        phone: e.target.value,
      }));
      setError(() => ({ ...error, phone: false }));
    }
    if (e.target.placeholder === "Email") {
      setData(() => ({
        ...data,
        email: e.target.value,
      }));
      setError(() => ({ ...error, email: false }));
    }
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const responeData = await postRegister(data);
    const logoutData = await responeData.json();

    if (responeData.status === 203) {
      const errorData = { ...error };
      logoutData.map((err: { path: string }) => {
        if (err.path === "fullName") {
          errorData.fullName = true;
        } else if (err.path === "email") {
          errorData.email = true;
        } else if (err.path === "password") {
          errorData.password = true;
        } else if (err.path === "confirmPassword") {
          errorData.confirmPassword = true;
        } else if (err.path === "phone") {
          errorData.phone = true;
        }
      });
      setError(errorData);
    }
    if (responeData.status === 201) {
      router.push("/login");
    }
  };

  return (
    <div className={classes.register}>
      <img
        className={classes["register_logo"]}
        src={"/img/logo_lock.png"}
        alt="logo"
      />
      <form onSubmit={submitHandler} className={classes["form_register"]}>
        <h1>Sign Up</h1>
        <Input
          last={false}
          cb={dataChangeHandler}
          type={"text"}
          placeholder={"Full Name"}
          err={error.fullName}
        />
        <Input
          last={false}
          cb={dataChangeHandler}
          type={"email"}
          placeholder={"Email"}
          err={error.email}
        />
        <Input
          last={false}
          cb={dataChangeHandler}
          type={"password"}
          placeholder={"Password"}
          err={error.password}
        />
        <Input
          last={false}
          cb={dataChangeHandler}
          type={"password"}
          placeholder={"Confirm Password"}
          err={error.password ? error.password : error.confirmPassword}
        />
        <Input
          last={false}
          cb={dataChangeHandler}
          type={"number"}
          placeholder={"Phone"}
          err={error.phone}
        />
        <button>SIGN UP</button>
        <p>
          Login?
          <span
            onClick={() => {
              router.push("/login");
            }}
          >
            Click
          </span>
        </p>
      </form>
    </div>
  );
}
