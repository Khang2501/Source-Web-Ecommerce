import classes from "./ProductDescription.module.scss";

type Props = {
  description: string;
};

export default function ProductDescription({ description }: Props) {
  return (
    <div className={classes["detail_description"]}>
      <h3>DESCRIPTION</h3>
      <h2>PRODUCT DESCRIPTION</h2>

      <pre>{description}</pre>
    </div>
  );
}
