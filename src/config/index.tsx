import { Question } from "../components/Survey/hook";

export const config: SurveyConfig = {
  greeting: {
    title: "سلام :)",
    description:
      "توی این نظر سنجی چندتا سوال کوتاه از شما داریم ممنون میشیم جواب بدید‌:)",
  },

  ending: {
    description: "نظر سنجی تمام شد‌:)",
    title: "تموم",
  },

  questions: [
    {
      id: "1",
      type: "singleChoice",
      questionText: "لطفا جنسیت خود را انتخاب کنید.",
      required: true,
      options: ["خانم", "آقا"],
      defaultValue: "",
      value: "",
    },

    {
      id: "2",
      type: "singleChoice",
      questionText: "لطفا بازه سنی خود را انتخاب کنید.",
      required: true,
      options: [
        "کمتر از 20 سال",
        "20 - 25 سال",
        "25 - 30 سال",
        "30 - 40 سال",
        "بیشتر از 40 سال",
      ],
      defaultValue: "",
      value: "",
    },

    {
      id: "3",
      type: "singleChoice",
      questionText: "آیا دانشجو هستید؟",
      required: true,
      options: ["بله", "خیر"],
      defaultValue: "",
      value: "",
    },

    {
      id: "4",
      type: "singleChoice",
      questionText: "لطفا گزینه مرتبط با تحصیلات خود را انتخاب کنید.",
      required: true,
      options: ["دیپلم", "کارشناسی", "کارشناسی ارشد", "دکترا"],
      defaultValue: "",

      value: "",
    },

    {
      id: "5",
      type: "singleChoice",
      questionText: "لطفا حوزه کاری/تحصیلی خود را انتخاب کنید.",
      required: true,
      options: [
        "حوزه کسب و کار و استارتاپ ها",
        "علوم کامپیوتر",
        "علوم پزشکی",
        "علوم انسانی",
        "سایر",
      ],
      defaultValue: "",

      value: "",
    },

    {
      id: "6",
      type: "multiChoice",
      questionText: "نحوه آشنایی شما با این دوره چطور بوده است؟",
      required: true,
      description: "یک یا چند گزینه را انتخاب نمایید.",
      options: [
        "دوستان",
        "فضای مجازی",
        "عضوی از جامعه پویتک هستم",
        "اطلاع رسانی مرکز",
        "سایر",
      ],
      defaultValue: [],

      value: [],
    },

    {
      id: "7",
      type: "singleChoice",
      questionText: "چه مدت است که فعالیت کاری خود را آغاز کرده‌اید؟",
      required: true,
      options: ["کمتر از 5 سال", "5 - 10 سال", "بیشتر از 10 سال"],
      defaultValue: "",

      value: "",
    },

    {
      id: "8",
      type: "singleChoice",
      questionText: "با چه هدفی در این دوره شرکت کرده‌اید؟",
      required: true,
      options: [
        "آشنایی با مفاهیم اولیه",
        "تغییر حوزه کاری",
        "بهبود مهارت در این حوزه",
        "توسعه شبکه ارتباطی",
      ],
      defaultValue: "",

      value: "",
    },
  ],
};

type SurveyConfig = {
  greeting: {
    title: string;
    description: string;
  };

  ending: {
    title: string;
    description: string;
  };

  questions: Question[];
};
