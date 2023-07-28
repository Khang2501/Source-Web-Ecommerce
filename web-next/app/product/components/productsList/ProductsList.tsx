import React from "react";
import getProducts, { changePrice } from "@/lib/getProducts";

import classes from "./ProductsList.module.scss";
type Props = {
  searchKey: string;
};

export default async function ProductsList({ searchKey }: Props) {
  const ProductData = await getProducts();
  const data = await ProductData;

  return (
    <div className={classes["products_list"]}>
      <div className={classes["search-sort"]}>
        <input
          // ref={enteredInput}
          // onChange={inputChangeHandler}
          type="text"
          placeholder="Enter Search Here"
        />
        <select>
          <option>Default sorting</option>
        </select>
      </div>
      {/* {isLoading && (
        <div>
          <ul className={classes["product_list-items"]}>
            {items.map((prod) => (
              <li
                key={prod._id.$oid}
                onClick={() => {
                  // navigate(`/detail/${prod._id}`);
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                <img src={prod.img1} alt={prod.name} />
                <p className={classes["item_name"]}>{prod.name}</p>
                <p className={classes["item_price"]}>{prod.price}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={classes.couterList}>
        <div>
          <button>{`<<`}</button>
          <span className={counter ? classes.counter : classes.counterNone}>
            1
          </span>
          <button>{`>>`}</button>
        </div>
        <p>Showing 1-9 of 9 results</p>
      </div> */}
    </div>
  );
}
