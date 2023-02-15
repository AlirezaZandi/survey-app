import React from "react";

import styles from "./style.module.scss";

type Props = {
  label?: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disable?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  label,
  className,
  size = "md",
  onClick,
  disable,
  type,
}: Props) => {
  return (
    <button
      type={type || "button"}
      onClick={(e) => {
        if (disable) return;

        onClick?.(e);
      }}
      className={`${styles.btn} ${className} ${size === "sm" && styles.small} ${
        disable && styles.disable
      }`}>
      {label}
    </button>
  );
};

export { Button };
