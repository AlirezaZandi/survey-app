import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Input } from "@/components/common/TextInput";
import { Greetings } from "@/components/Greetings";
import { Progress } from "@/components/Progress";
import { Question } from "@/components/Question";
import { NavButtons } from "@/components/NavButtons";
import { Ending } from "@/components/Ending";
import { config } from "@/config";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useSurvey, QuestionForm, Steps } from "./hook";

import styles from "./styles.module.scss";
import {
  Controller,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
} from "react-hook-form";
import { MultiOption } from "./Inputs/MultiOption";
import { Score } from "./Inputs/score";

type Props = {};

type RenderArgs = {
  field: ControllerRenderProps<QuestionForm, `questions.${number}.value`>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<QuestionForm>;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Survey = (props: Props) => {
  const [direction, setDirection] = useState(1);
  const {
    step,
    startSurvey,
    currentQuestionData,
    nextQuestion,
    previousQuestion,
    allowNextQuestion,
    questionsCount,
    currentQuestion,
    control,
    formState,
  } = useSurvey(config.questions);
  const router = useRouter();

  const renderInput = ({ field, fieldState, formState }: RenderArgs) => {
    switch (currentQuestionData?.type) {
      case "text":
        return (
          <Input
            value={currentQuestionData.value || ""}
            onChange={field.onChange}
            name={field.name}
            ref={field.ref}
          />
        );

      case "singleChoice":
        return (
          <MultiOption
            value={currentQuestionData.value || ""}
            onChange={field.onChange}
            options={currentQuestionData.options.map((o) => ({
              value: o,
              label: o,
            }))}
          />
        );

      case "multiChoice":
        return (
          <MultiOption
            value={currentQuestionData.value || []}
            multiple
            onChange={field.onChange}
            options={currentQuestionData.options.map((o) => ({
              value: o,
              label: o,
            }))}
          />
        );

      case "score":
        return (
          <Score
            value={currentQuestionData.value || 0}
            min={1}
            max={5}
            onChange={field.onChange}
          />
        );

      default:
        throw new Error("question type is not supported");
    }
  };

  useEffect(() => {
    if (direction > 0) {
      nextQuestion();
    } else if (direction < 0) {
      previousQuestion();
    }
  }, [direction]);

  return (
    <section className={styles.survey}>
      <div className={styles.container}>
        {step === Steps.start && <Greetings onStartClick={startSurvey} />}
        {step === Steps.inProcess &&
          config.questions.map((q) => (
            <>
              <AnimatePresence mode='popLayout'>
                {q.id === currentQuestionData.id && (
                  <motion.div
                    className={styles.item}
                    key={q.id}
                    custom={direction}
                    variants={variants}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 30,
                      duration: 0.7,
                    }}>
                    <Question
                      questionNumber={currentQuestion + 1}
                      questionText={currentQuestionData?.questionText}
                      disableNextButton={allowNextQuestion}
                      onSubmit={nextQuestion}
                      description={currentQuestionData.description}>
                      <Controller
                        control={control}
                        name={`questions.${currentQuestion}.value`}
                        render={renderInput}
                        rules={{
                          required: {
                            value: currentQuestionData.required,
                            message: "جواب به این سوال اجباریه!",
                          },
                        }}
                      />
                    </Question>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ))}

        {step === Steps.end && <Ending onRestart={() => router.reload()} />}
      </div>

      {step === Steps.inProcess && (
        <footer className={styles.footer}>
          <a
            onClick={() => {
              setDirection((p) => (p < 0 ? p - 1 : -1));
            }}
            className={styles.navButton}>
            <FiChevronRight />
            قبلی
          </a>
          <Progress
            value={Math.round((currentQuestion / questionsCount) * 100)}
          />
          <a
            onClick={() => {
              setDirection((p) => (p > 0 ? p + 1 : 1));
            }}
            className={styles.navButton}>
            بعدی
            <FiChevronLeft />
          </a>
        </footer>
      )}
    </section>
  );
};

export { Survey };
