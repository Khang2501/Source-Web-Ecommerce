import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import classes from "./ProductDetail.module.scss";

type Props = {
  productDefault: Product;
  product: Product;
  toggle: (prod: Product) => void;
};

export default function ProductDetail({
  productDefault,
  product,
  toggle,
}: Props) {
  return (
    <div className={classes["detail-background"]}>
      <div className={classes["detail-form"]}>
        <div className={classes["detail_img"]}>
          <img src={product.img1} alt={product.name} />
        </div>
        <div className={classes.detail}>
          <button
            onClick={() => toggle(productDefault)}
            className={classes["btn__detail-close"]}
          >
            X
          </button>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <span>{product.long_desc}</span>
          <br />

          <Link
            href={`/product/${product._id}`}
            className={classes["btn__detail-view"]}
          >
            <FaShoppingCart />
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
