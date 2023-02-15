import React, { forwardRef } from "react";

import styles from "./style.module.scss";

type Props = {
  label?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
};

const TextInput = ({ label, className, onChange, value }: Props, ref: any) => {
  return (
    <p className={styles.inputContainer}>
      <input
        type='text'
        autoComplete='name'
        name='size'
        id='size_1'
        className={`${styles.input} ${className}`}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        ref={ref}
      />
      <label htmlFor='size_1' className={styles.label}>
        {label}
      </label>
    </p>
  );
};

const TextInputWithRef = forwardRef(TextInput);

export { TextInputWithRef as Input };
