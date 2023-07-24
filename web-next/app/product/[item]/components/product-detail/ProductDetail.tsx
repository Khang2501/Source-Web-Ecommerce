"use client";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { changePrice } from "@/lib/getProducts";
import style from "./ProductDetail.module.scss";

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const [imgKey, setImgKey] = useState(product.img1);
  const [counter, setCounter] = useState(1);

  const [notify, setNotify] = useState("");

  //increment quantity
  const increHandler = () => {
    setCounter((counter) => counter + 1);
  };
  //decrement quantity
  const decreHandler = () => {
    setCounter((counter) => {
      if (counter === 1) {
        return (counter = 1);
      } else {
        return counter - 1;
      }
    });
  };
  const addCartHandler = () => {};

  const ImgElement = ({ img }: { img: string }) => {
    return (
      <li>
        <img
          className={style["items_img"]}
          src={img}
          alt="list_img"
          onClick={() => {
            setImgKey(img);
          }}
        />
      </li>
    );
  };

  return (
    <>
      <div className={style["detail_top"]}>
        <div className={style["detail_top-left"]}>
          <ul className={style["detail_list-img"]}>
            <ImgElement img={product.img1} />
            <ImgElement img={product.img2} />
            <ImgElement img={product.img3} />
            <ImgElement img={product.img4} />
          </ul>
          <img
            className={style["detail_img"]}
            src={imgKey ? imgKey : product.img1}
            alt="list_img"
          />
        </div>
        <div className={style["detail_top-right"]}>
          <h1>{product.name}</h1>
          <h2>{changePrice(product.price)}</h2>
          <p>{product.short_desc}</p>
          <h3>
            CATEGORY: <span>{product.category}</span>
          </h3>
          <div className={style["item_quantity"]}>
            <h4>QUANTITY</h4>
            <div>
              <button onClick={decreHandler} className={style["btn_quantity"]}>
                {<FaCaretLeft />}
              </button>
              <p>{counter}</p>
              <button onClick={increHandler} className={style["btn_quantity"]}>
                {<FaCaretRight />}
              </button>
            </div>
            <button onClick={addCartHandler} className={style["btn_add"]}>
              Add to card
            </button>
          </div>
        </div>
      </div>
      {/* {notify && <Alerts status={notify} close={closeAlertHandler} />} */}
    </>
  );
}
