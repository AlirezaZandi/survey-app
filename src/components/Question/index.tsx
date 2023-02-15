import React, { PropsWithChildren } from "react";

import { Button } from "@/components/common/Button";

import styles from "./styles.module.scss";

type Props = {
  questionText: string;
  questionNumber: number;
  disableNextButton?: boolean;
  onSubmit?: () => void;
  display?: boolean;
  description?: string;
};

const Question = ({
  questionNumber,
  questionText,
  onSubmit,
  disableNextButton,
  children,
  display: diaplay = true,
  description,
}: PropsWithChildren<Props>) => {
  if (!diaplay) {
    return null;
  }
  return (
    <form
      className={styles.questionForm}
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit?.();
      }}>
      <fieldset className={styles.question}>
        <legend className={styles.title}>
          {questionNumber}. {questionText}
        </legend>
        {description && <p className={styles.description}>{description}</p>}

        {children}
      </fieldset>

      <Button
        label='سوال بعد'
        className={styles.submitButton}
        disable={disableNextButton}
        type='submit'
      />
    </form>
  );
};

export { Question };
