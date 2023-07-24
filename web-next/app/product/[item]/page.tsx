import { getProduct } from "@/lib/getProducts";
import React from "react";
import ProductDetail from "./components/product-detail/ProductDetail";
import ProductDescription from "./components/product-description/ProductDescription";
import ProductRelated from "./components/product-related/ProductRelated";

type Props = {
  params: {
    item: string;
  };
};

export default async function Product({ params: { item } }: Props) {
  const productData: Promise<Product[]> = await getProduct(item);
  const data = await productData;
  const product = data[0];

  return (
    <div>
      <ProductDetail product={product} />
      <ProductDescription description={product.long_desc} />
      <ProductRelated category={product.category} id={product._id} />
    </div>
  );
}
