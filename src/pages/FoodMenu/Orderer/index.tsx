import styles from "./Orderer.module.scss";
import options from "./options.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  orderer: string;
  setOrderer: React.Dispatch<React.SetStateAction<string>>;
}

export default function Orderer({ orderer, setOrderer }: Props) {
  const [open, setOpen] = useState(false);
  const ordererName =
    orderer && options.find((option) => option.value === orderer)?.name;
  return (
    <button
      className={styles.orderer}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{ordererName || "Order by"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.orderer__options]: true,
          [styles["orderer__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.orderer__option}
            key={option.value}
            onClick={() => setOrderer(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
