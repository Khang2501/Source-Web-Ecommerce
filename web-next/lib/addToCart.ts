export default async function addToCart(dataAddToCart: DataAddToCart) {
  const data:DataAddToCart = {
    token: dataAddToCart.token,
    email: dataAddToCart.email,
    prodId: dataAddToCart.prodId,
    quantity: dataAddToCart.quantity,
  };

  const JSONdata = JSON.stringify(data);

  const endpoint = "https://web-ecommerce-xzk6.onrender.com/addToCart";

  const options = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSONdata,
  };

  const response = await fetch(endpoint, options);

  return response;
}
