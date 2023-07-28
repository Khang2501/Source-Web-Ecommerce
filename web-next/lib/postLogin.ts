export default async function postLogin(dataLogin: {
  email: string;
  password: string;
}) {
  const data = {
    email: dataLogin.email,
    password: dataLogin.password,
  };

  const JSONdata = JSON.stringify(data);

  const endpoint = "https://web-ecommerce-xzk6.onrender.com/login";

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
