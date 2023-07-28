export default async function postRegister(dataRegister: Register) {
  const data = {
    fullName: dataRegister.fullName,
    email: dataRegister.email,
    confirmPassword: dataRegister.confirmPassword,
    phone: dataRegister.phone,
    password: dataRegister.password,
  };

  const JSONdata = JSON.stringify(data);

  const endpoint = "https://web-ecommerce-xzk6.onrender.com/register";

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
