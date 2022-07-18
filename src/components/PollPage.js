import { connect } from "react-redux";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";

const PollPage = ({ dispatch, authedUser, author, question }) => {
  const navigate = useNavigate();

  if (!authedUser || !question || !author) {
    return <Navigate to="/404" />;
  }

  const handleFirstChoice = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
    navigate("/");
  };

  const handleSecondChoice = (e) => {
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
    navigate("/");
  };

  const votedForOptionOne = question.optionOne.votes.includes(authedUser.id);
  const votedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const hasVoted = votedForOptionOne || votedForOptionTwo;

  const votePercentage = (option, question) => {
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    switch (option) {
      case "optionOne":
        return (question.optionOne.votes.length / totalVotes) * 100 + " %";
      case "optionTwo":
        return (question.optionTwo.votes.length / totalVotes) * 100 + " %";
      default:
        return "";
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-9">Poll by {author.id}</h1>
      <div className="flex justify-center">
        <img
          src={author.avatarURL}
          alt={`Profile of ${author.name}`}
          className="h-24 w-24"
        />
      </div>

      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mt-6">Would you rather...</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <button
          onClick={handleFirstChoice}
          disabled={hasVoted}
          className={
            "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " +
            (votedForOptionOne ? "bg-lime-400" : "")
          }
        >
          <div className={votedForOptionOne ? "chosen" : ""}>
            <p className="font-bold mb-2">{question.optionOne.text}</p>
            {!hasVoted && (
              <p className="underline underline-offset-4 mb-3">Click</p>
            )}
            {hasVoted && (
              <p className="text-xs">
                Votes: {question.optionOne.votes.length} (
                {votePercentage("optionOne", question)})
              </p>
            )}
          </div>
        </button>
        <button
          onClick={handleSecondChoice}
          disabled={hasVoted}
          className={
            "p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " +
            (votedForOptionTwo ? "bg-lime-400" : "")
          }
        >
          <div className={votedForOptionTwo ? "chosen" : ""}>
            <p className="font-bold mb-2">{question.optionTwo.text}</p>
            {!hasVoted && (
              <p className="underline underline-offset-4 mb-3">Click</p>
            )}
            {hasVoted && (
              <p className="text-xs">
                Votes: {question.optionTwo.votes.length} (
                {votePercentage("optionTwo", question)})
              </p>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    const author = Object.values(users).find(
      (user) => user.id === question.author
    );
    return { authedUser, author, question };
  } catch (error) {
    return <Navigate to="/404" />;
  }
};

export default connect(mapStateToProps)(PollPage);
