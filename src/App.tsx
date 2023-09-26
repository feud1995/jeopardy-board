import { useState } from "react";
import { JeopardyQuestion, questions } from "./questions";

import board from "./assets/board.jpeg";

import "./App.css";
import { twMerge } from "tailwind-merge";

const cardClasses =
  "w-[280px] h-[160px] font-roboto font-bold aspect-video text-white bg-jeopardyBlue flex items-center justify-center p-4";

interface QuestionCardProps {
  company: string;
  question: JeopardyQuestion;
  onQuestionClicked(value: { company: string; question: JeopardyQuestion }): void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ company, question, onQuestionClicked }) => {
  const [opened, setOpened] = useState(false);

  const handleQuestionClicked = () => {
    if (opened) {
      return;
    }

    onQuestionClicked({ company, question });
    setOpened(true);
  };

  return (
    <div
      className={twMerge(
        cardClasses,
        `text-moneyYellow font-roboto text-4xl font-bold textShadow ${opened ? "cursor-default" : "cursor-pointer"}`
      )}
      onClick={handleQuestionClicked}
    >
      {opened === false && <h2>${question.value}</h2>}
    </div>
  );
};

interface QuestionColumnProps {
  company: string;
  questions: JeopardyQuestion[];
  onQuestionClicked(value: { company: string; question: JeopardyQuestion }): void;
}

const QuestionColumn: React.FC<QuestionColumnProps> = ({ company, questions, onQuestionClicked }) => {
  return (
    <div className="grid grid-rows-4 gap-4">
      <div className={twMerge(cardClasses, "cursor-default")}>
        <h1>{company}</h1>
      </div>
      {questions.map((q) => (
        <QuestionCard
          key={`${company}-${q.value}`}
          company={company}
          question={q}
          onQuestionClicked={onQuestionClicked}
        />
      ))}
    </div>
  );
};

function App() {
  const [current, setCurrent] = useState<{ company: string; question: JeopardyQuestion } | undefined>();

  return (
    <>
      <div
        className="w-screen h-screen flex items-center justify-center bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${board})` }}
      >
        <div className="grid grid-cols-4 gap-4 bg-black pt-12">
          {Object.entries(questions).map(([company, questions]) => (
            <QuestionColumn
              key={company}
              company={company}
              questions={questions}
              onQuestionClicked={(question) => setCurrent(question)}
            />
          ))}
        </div>
      </div>
      <div className={`transition-all duration-400 ease-in ${current ? "opacity-100" : "opacity-0"}`}>
        {current && (
          <div
            onClick={() => setCurrent(undefined)}
            className={`absolute top-0 left-0 right-0 bottom-0 cursor-pointer `}
          >
            <div className="h-screen w-sreen font-baskerville bg-jeopardyBlue flex flex-col justify-center text-center gap-10 px-[200px] font-bold text-3xl textShadow-lg">
              {current && <h1>{current.question.question}</h1>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
