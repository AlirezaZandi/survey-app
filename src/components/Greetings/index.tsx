import React from "react";

import { config } from "@/config";

import styles from "./styles.module.scss";
import { Button } from "@/components/common/Button";

type Props = {
  onStartClick?: () => void;
};

const Greetings = ({ onStartClick }: Props) => {
  return (
    <article className={styles.greeting}>
      <header>
        <h1 className={styles.title}>{config.greeting.title}</h1>
      </header>

      <p className={styles.description}>{config.greeting.description}</p>

      <footer className={styles.start}>
        <Button onClick={onStartClick} label='شروع' />
      </footer>
    </article>
  );
};

export { Greetings };
