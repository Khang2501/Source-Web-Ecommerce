import React from "react";
import classes from "./Banner.module.scss";
import Link from "next/link";

import logo from "@/public/img/logo_lock.png";
export default function Banner() {
  return (
    <div className={classes.banner}>
      <div className={classes["banner_title"]}>
        <h4>NEW INSPIRATION 2020</h4>
        <h1>20% OFF ON NEW SEASON</h1>
        <button>
          <Link href="/shop">Browe collections</Link>
        </button>
      </div>
      <img
        className={classes["banner_logo"]}
        src={"/img/logo_lock.png"}
        alt="logo"
      />
    </div>
  );
}
