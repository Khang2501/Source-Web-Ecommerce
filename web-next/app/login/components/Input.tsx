import classes from "./Input.module.scss";

type Props = {
  cb: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  err: boolean;
  last: boolean;
};

export default function Input({ cb, type, placeholder, err, last }: Props) {
  return (
    <input
      className={
        !err
          ? classes["form-input"]
          : `${classes["form-input"]} ${classes.error}`
      }
      style={last ? { borderBottom: "2px solid rgba(0, 0, 0, 0.2)" } : {}}
      onChange={cb}
      type={type}
      placeholder={placeholder}
    />
  );
}
