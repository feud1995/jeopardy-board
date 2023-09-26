import { useState } from "react";
import { JeopardyQuestion, questions } from "./questions";

import "./App.css";

const cardClasses = "w-full aspect-video text-white bg-blue-500 flex items-center justify-center p-4";

interface QuestionCardProps {
  company: string;
  question: JeopardyQuestion;
  onQuestionClicked(value: { company: string; question: JeopardyQuestion }): void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ company, question, onQuestionClicked }) => {
  const [opened, setOpened] = useState(false);

  const handleQuestionClicked = () => {
    onQuestionClicked({ company, question });
    setOpened(true);
  };

  return (
    <div className={cardClasses} onClick={handleQuestionClicked}>
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
      <div className={cardClasses}>
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
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(questions).map(([company, questions]) => (
          <QuestionColumn
            key={company}
            company={company}
            questions={questions}
            onQuestionClicked={(question) => setCurrent(question)}
          />
        ))}
      </div>
      {current && (
        <div onClick={() => setCurrent(undefined)} className="absolute top-0 left-0 right-0 bottom-0 bg-[#242424] p-40">
          <div className="w-full h-full bg-blue-500 flex flex-col justify-center gap-10">
            <h1>
              {current.company} : ${current.question.value} 
            </h1>

            <h1>{current.question.question}</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
