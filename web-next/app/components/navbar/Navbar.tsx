import React from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import { FaShoppingCart, FaUser, FaCaretDown } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import classes from "./Navbar.module.scss";

export default function Navbar() {
  const cookieStore = cookies();
  const tokenData = cookieStore.get("token");
  const token = tokenData?.value;
  const userNameData = cookieStore.get("userName");
  const userName = userNameData?.value;
  return (
    <div className={classes.navbar}>
      <ul className={classes["navbar-left"]}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
      </ul>
      <h2>BOUTIQUE</h2>
      <ul className={classes["navbar-right"]}>
        {token && (
          <li>
            <GrTransaction />

            <span>
              <Link href="/history">History</Link>
            </span>
          </li>
        )}
        <li>
          <Link href="/cart">
            <FaShoppingCart />
            Cart
          </Link>
        </li>
        {token && (
          <li>
            <FaUser />
            {token && `${userName}`}
            <FaCaretDown />
            <span>{`  (Logout)`}</span>
          </li>
        )}
        {!token && (
          <li>
            <Link href="/login">
              <FaUser /> Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
