export function changePrice(price: number): string {
  let milion = Math.floor(price / 1000000);
  let thousand = Math.floor((price - milion * 1000000) / 1000);
  if (thousand < 10) {
    return `${milion}.00${thousand}.000 VND`;
  } else if (thousand < 100) {
    return `${milion}.0${thousand}.000 VND`;
  }
  return `${milion}.${thousand}.000 VND`;
}

export async function getRelated(category: string, id: string) {
  const productData = await fetch(
    `https://web-ecommerce-xzk6.onrender.com/product/prodCate/${category}?id=${id}`
  );

  return productData.json();
}

export async function getProduct(id: string) {
  const productData = await fetch(
    `https://web-ecommerce-xzk6.onrender.com/product/products/${id}`
  );

  return productData.json();
}

export default async function getProducts() {
  const productsData = await fetch(
    "https://web-ecommerce-xzk6.onrender.com/product/products/all"
  );

  return productsData.json();
}
