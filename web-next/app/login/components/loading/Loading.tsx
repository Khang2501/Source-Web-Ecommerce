import React from "react";

import classes from "./Loading.module.scss";

type Props = {
  data: {
    token: string;
    email: string;
    userName: string;
  };
};

export default function Loading({ data }: Props) {
  return <span className={classes["loader"]}></span>;
}
