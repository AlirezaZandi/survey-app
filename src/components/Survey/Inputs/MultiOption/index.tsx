import React from "react";

import styles from "./styles.module.scss";

import { motion } from "framer-motion";
import { CheckIcon } from "./CheckIcon";

type Props<T> = {
  options: {
    value: T;
    label: string;
  }[];
} & (
  | {
      multiple: true;
      value: T[];
      onChange: (newValues: T[]) => void;
    }
  | {
      multiple?: false;
      value: T;
      onChange: (newValue: T) => void;
    }
);

const MultiOption = <T,>({ options, multiple, value, onChange }: Props<T>) => {
  const isSelected = (checkValue: T) => {
    if (multiple) {
      return value.includes(checkValue);
    } else {
      return value === checkValue;
    }
  };

  const handleChange = (option: T) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      onChange(option);
    }
  };

  return (
    <div className={styles.container}>
      {options.map((option, index) => (
        <motion.button
          whileTap={{
            scale: [1.05, 1.08],
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            bounce: 1,
            duration: 0.1,
            type: "spring",
          }}
          type='button'
          key={option.label}
          className={`${styles.option} ${
            isSelected(option.value) && styles.selected
          }`}
          onClick={() => handleChange(option.value)}>
          <span className={`${styles.optionNumber}`}>
            {multiple
              ? isSelected(option.value) && <CheckIcon size={20} />
              : index + 1}
          </span>
          {option.label}
        </motion.button>
      ))}
    </div>
  );
};

export { MultiOption };
