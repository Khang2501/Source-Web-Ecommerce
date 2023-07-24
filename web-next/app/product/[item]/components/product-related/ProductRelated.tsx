import { getRelated, changePrice } from "@/lib/getProducts";
import classes from "./ProductRelated.module.scss";
import React from "react";
import Link from "next/link";

type Props = {
  category: string;
  id: string;
};

export default async function ProductRelated({ category, id }: Props) {
  const productRelateData = await getRelated(category, id);
  const data = await productRelateData;

  return (
    <div className={classes["detail_related"]}>
      <h2>RELARED PRODUCTS</h2>
      <ul className={classes["product_list"]}>
        {data.map((rel: Product) => {
          return (
            <li key={rel._id}>
              <Link href={`/product/${rel._id}`}>
                <img src={rel.img1} alt={rel.name} />
                <p className={classes["item_price"]}>
                  {changePrice(rel.price)}
                </p>
                <p className={classes["item_name"]}>{rel.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
