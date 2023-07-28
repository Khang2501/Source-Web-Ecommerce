import React from "react";
import { cookies } from "next/headers";
import ProductDetail from "./components/product-detail/ProductDetail";
import ProductDescription from "./components/product-description/ProductDescription";
import ProductRelated from "./components/product-related/ProductRelated";

import { getProduct } from "@/lib/getProducts";

type Props = {
  params: {
    item: string;
  };
};

export default async function Product({ params: { item } }: Props) {
  const cookieStore = cookies();
  const tokenData = cookieStore.get("token");
  const token = tokenData?.value;
  const userNameData = cookieStore.get("email");
  const email = userNameData?.value;

  const productData: Promise<Product[]> = await getProduct(item);
  
  const data = await productData;
  const product = data[0];

  return (
    <div>
      <ProductDetail product={product} cookie={{token:token, email:email}} />
      <ProductDescription description={product.long_desc} />
      <ProductRelated category={product.category} id={product._id} />
    </div>
  );
}
