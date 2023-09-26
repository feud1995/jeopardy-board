export interface JeopardyQuestion {
  value: number;
  question: string;
  answer: string;
}

export const questions: { [key: string]: JeopardyQuestion[] } = {
  Cygni: [
    {
      value: 100,
      question: "The number of offices Cygni has",
      answer: "42",
    },
    {
      value: 200,
      question: "This is the most endorsed skill on Jon Perssons (CEO) linked in page",
      answer: "42",
    },
    {
      value: 300,
      question: "The number of people that started Cygni",
      answer: "42",
    },
  ],
  Sentor: [
    {
      value: 100,
      question: "The year that Sentor was founded",
      answer: "42",
    },
    {
      value: 200,
      question: "How many roads must the man walk down?",
      answer: "42",
    },
    {
      value: 300,
      question: "How many roads must the man walk down?",
      answer: "42",
    },
  ],
  Accenture: [
    {
      value: 100,
      question: "How many roads must the man walk down?",
      answer: "42",
    },
    {
      value: 200,
      question: "How many roads must the man walk down?",
      answer: "42",
    },
    {
      value: 300,
      question: "How many roads must the man walk down?",
      answer: "42",
    },
  ],
  Avanade: [
    {
      value: 100,
      question: "How many roads must the man walk down?",
      answer: "42",
    },
    {
      value: 200,
      question: "How many roads must the man walk down?",
      answer: "42",
    },
    {
      value: 300,
      question: "How many roads must the man walk down?",
      answer: "42",
    },
  ],
};
