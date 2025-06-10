import type React from "react";
import styles from "./button.module.scss";

type Props = {
  text?: string;
  theme?: "blue" | "gray";
  onClick: () => void;
  icon?: React.ReactNode;
};

export const Button = ({ text, theme = "gray", onClick, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${
        theme === "gray" ? styles.gray : styles.blue
      }`}>
      {text}
      {icon}
    </button>
  );
};
