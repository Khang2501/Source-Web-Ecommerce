"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import setCookies from "@/lib/setCookies";

import { FaShoppingCart, FaUser, FaCaretDown } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import classes from "./Navbar.module.scss";

interface Props {
  token: string | undefined;
  userName: string | undefined;
}

export default function Navbar({ token, userName }: Props) {
  const router = useRouter();

  const logoutHandler = () => {
    setCookies("", "", "");
    router.refresh();
  };
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
          <li onClick={logoutHandler}>
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
