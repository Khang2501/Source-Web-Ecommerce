import classes from "./Categories.module.scss";
export default function Categories() {
  return (
    <div>
      <div className={classes["cate_title"]}>
        <h4>CAREFULLY CREATED COLLECTIONS</h4>
        <h3>BROWSE OUR CATEGORIES</h3>
      </div>
      <div className={classes["cate_list"]}>
        <div className={classes["cate_item"]}>
          <img src={"/listItem/iphone.png"} alt="iphone" />
          <img src={"/listItem/mac.png"} alt="mac" />
        </div>
        <div className={classes["cate_item"]}>
          <img src={"/listItem/ipad.png"} alt="ipad" />
          <img src={"/listItem/watch.png"} alt="watch" />
          <img src={"/listItem/airpods.png"} alt="airpods" />
        </div>
      </div>
    </div>
  );
}
