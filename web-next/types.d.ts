type Product = {
  _id: string;
  category: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  long_desc: string;
  name: string;
  price: number;
  short_desc: string;
  amount: number;
  __v: number;
};
type Register = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};
type DataAddToCart = {
  token: string | undefined;
  email: string | undefined;
  prodId: string;
  quantity: number;
};
