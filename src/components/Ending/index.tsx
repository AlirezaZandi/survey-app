import React from "react";

import { config } from "@/config";

import styles from "./styles.module.scss";
import { Button } from "../common/Button";

type Props = {
  onRestart: () => void;
};

const Ending = ({ onRestart }: Props) => {
  return (
    <article className={styles.greeting}>
      <header>
        <h1 className={styles.title}>{config.ending.title}</h1>
      </header>

      <p className={styles.description}>{config.ending.description}</p>

      <footer className={styles.start}>
        <Button onClick={onRestart} label='شروع مجدد' />
      </footer>
    </article>
  );
};

export { Ending };
