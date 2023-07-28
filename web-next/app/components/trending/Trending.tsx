"use client";

import React, { useState } from "react";
import { changePrice } from "@/lib/getProducts";

import ProductDetail from "../productDetail/ProductDetail";
import classes from "./Trending.module.scss";

interface Props {
  products: Product[];
}

export default function Trending({ products }: Props) {
  const productDefault = {
    _id: "",
    category: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    long_desc: "",
    name: "",
    price: 0,
    short_desc: "",
    amount: 0,
    __v: 0,
  };

  const [detail, setDetail] = useState<{
    isToggle: boolean;
    product: Product;
  }>({
    isToggle: false,
    product: productDefault,
  });

  const toggleDetailHandler = (prod: Product) => {
    setDetail({ isToggle: !detail.isToggle, product: prod });
  };

  return (
    <div>
      <div className={classes["trending_title"]}>
        <h4>MADE THE HARD WAY</h4>
        <h2>TOP TRENDING PRODUCTS</h2>
      </div>
      {detail.isToggle && (
        <ProductDetail
          productDefault={productDefault}
          toggle={toggleDetailHandler}
          product={detail.product}
        />
      )}
      <ul className={classes["trending_item"]}>
        {products.map((prod) => (
          <li key={prod._id}>
            <img
              src={prod.img1}
              alt={prod.name}
              onClick={() => toggleDetailHandler(prod)}
            />
            <p className={classes.name}>{prod.name}</p>
            <p className={classes.price}>{changePrice(prod.price)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
