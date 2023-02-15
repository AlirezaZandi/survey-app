import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import DeviceDetector from "device-detector-js";

export type QuestionForm = {
  questions: Question[];
};

const useSurvey = (questionsConfig: Question[]) => {
  const [step, setStep] = useState<Step>(Steps.start);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { control, formState, handleSubmit, watch } = useForm<QuestionForm>({
    defaultValues: {
      questions: questionsConfig,
    },

    mode: "all",
  });

  const questionsCount = questionsConfig.length;
  const currentQuestionData = watch().questions[currentQuestion];
  const allowNextQuestion =
    (currentQuestionData.required &&
      (currentQuestionData.value as any).length === 0) ||
    !currentQuestionData.required;

  const startSurvey = () => setStep(Steps.inProcess);

  const nextQuestion = () => {
    if (allowNextQuestion) {
      return;
    }

    if (questionsCount === currentQuestion + 1) {
      setStep(Steps.end);
      handleSubmit(submitSurvey)();
    } else {
      setCurrentQuestion((p) => p + 1);
    }
  };

  const previousQuestion = () => {
    if (0 === currentQuestion) {
      setStep(Steps.start);
    } else {
      setCurrentQuestion((p) => p - 1);
    }
  };

  const submitSurvey: SubmitHandler<QuestionForm> = (data) => {
    //send data to api
    const deviceDetector = new DeviceDetector();
    const userAgent = navigator.userAgent;
    const device = deviceDetector.parse(userAgent);

    const apiBody = {
      survey_title: "Initital Workshop Survey",
      detail: {
        device: device.device?.type,
        browser: device.client?.name,
      },

      survey_answer: data.questions.map((question) => {
        switch (question.type) {
          case "text":
            return {
              question_title: question.questionText,
              question_answer: {
                value: question.value,
              },
            };

          case "multiChoice":
            return {
              question_title: question.questionText,
              question_answer: {
                choices: question.value,
              },
            };

          case "singleChoice":
            return {
              question_title: question.questionText,
              question_answer: {
                value: question.value,
              },
            };

          case "score":
            return {
              question_title: question.questionText,
              question_answer: {
                value: question.value,
              },
            };
        }
      }),
    };

    console.log(JSON.stringify(apiBody));

    fetch("https://api-staging.tekfactory.ir/survey/answer", {
      method: "POST",
      body: JSON.stringify(apiBody),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => console.log(r));
  };

  return {
    step,
    currentQuestion,
    questionsCount,
    formState,
    control,
    nextQuestion,
    startSurvey,
    previousQuestion,
    allowNextQuestion,
    currentQuestionData,
  };
};

export const QuestionTypes = {
  text: "text",
  multiChoice: "multiChoice",
  singleChoice: "singleChoice",
  score: "score",
} as const;

type QuestionType = (typeof QuestionTypes)[keyof typeof QuestionTypes];

export const Steps = {
  start: "start",
  inProcess: "inProcess",
  end: "end",
} as const;

export type Step = (typeof Steps)[keyof typeof Steps];

export type Question = {
  id: string;
  questionText: string;
  required: boolean;
  description?: string;
} & (TextQuestion | MultiChoiceQuestion | SingleChoiceQuestion | ScoreQuestion);

type TextQuestion = {
  type: typeof QuestionTypes.text;
  value?: string;
  defaultValue: string;
};

type MultiChoiceQuestion = {
  type: typeof QuestionTypes.multiChoice;
  value?: string[];
  defaultValue: string[];
  options: string[];
};

type SingleChoiceQuestion = {
  type: typeof QuestionTypes.singleChoice;
  value?: string;
  defaultValue: string;
  options: string[];
};

type ScoreQuestion = {
  type: typeof QuestionTypes.score;
  value?: number;
  defaultValue: number;
  min: number;
  max: number;
};

export { useSurvey };
