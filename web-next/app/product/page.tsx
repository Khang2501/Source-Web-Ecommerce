"use client";
import React, { useState } from "react";

import classes from "./Product.module.scss";
import NavShop from "./components/navShop/NavShop";
import ProductsList from "./components/productsList/ProductsList";
type Props = {};

export default function Product({}: Props) {
  const [search, setSearch] = useState("All");

  const searchingHandler = (item: string) => {
    setSearch(item);
  };

  return (
    <div className={classes.shop}>
      <NavShop onSearch={searchingHandler} />

      {/* <ProductsList searchKey={search} /> */}
    </div>
  );
}
