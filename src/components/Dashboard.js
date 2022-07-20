import { connect } from "react-redux";
import { useState } from "react";
import PollCard from "./PollCard";

const Dashboard = ({ authedUser, questions, users }) => {
  const [isAnsweredShown, setIsAnsweredShown] = useState(false);
  const [isUnansweredShown, setIsUnansweredShown] = useState(true);

  const handleShowAnswered = (event) => {
    event.preventDefault();
    setIsAnsweredShown(!isAnsweredShown);
  };

  const handleShowUnanswered = (event) => {
    event.preventDefault();
    setIsUnansweredShown(!isUnansweredShown);
  };

  const unanswered = (question) =>
    !question.optionOne.votes.includes(authedUser.id) &&
    !question.optionTwo.votes.includes(authedUser.id);

  const answered = (question) =>
    question.optionOne.votes.includes(authedUser.id) ||
    question.optionTwo.votes.includes(authedUser.id);

  return (
    <div>
      <h1 className="text-3xl font-bold mt-9" data-testid="heading">
        Dashboard
      </h1>{" "}
      <h2 className="text-2xl font-bold mt-6">New Questions</h2>
      <button
        onClick={handleShowUnanswered}
        className="rounded-full bg-zinc-300 px-2 py-2 hover:bg-zinc-500 text-white over:shadow-xl transition "
      >
        {isUnansweredShown
          ? "Hide Unanswered Questions"
          : "Show Unanswered Questions"}
      </button>
      {isUnansweredShown && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.filter(unanswered).map((question) => (
            <li key={question.id}>
              <PollCard question={question} author={users[question.author]} />
            </li>
          ))}
        </ul>
      )}
      <h2 className="text-2xl font-bold mt-6">Answered Questions</h2>
      <button
        onClick={handleShowAnswered}
        className="rounded-full bg-zinc-300 px-2 py-2 hover:bg-zinc-500 text-white over:shadow-xl transition "
      >
        {isAnsweredShown
          ? "Hide Answered Questions"
          : "Show Answered Questions"}
      </button>
      {isAnsweredShown && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.filter(answered).map((question) => (
            <li key={question.id}>
              <PollCard question={question} author={users[question.author]} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
