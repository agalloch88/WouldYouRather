import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { handleAddQuestionAnswer } from "../actions/polls";

const PollPage = ({ dispatch, authedUser, author, question }) => {
  const navigate = useNavigate();

  const handleFirstChoice = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestionAnswer(question.id, "optionOne"));
    navigate("/");
  };

  const handleSecondChoice = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestionAnswer(question.id, "optionTwo"));
    navigate("/");
  };

  const votedForOptionOne = question.optionOne.votes.includes(authedUser.id);
  const votedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
  const hasVoted = votedForOptionOne || votedForOptionTwo;

  return (
    <div>
      <h1>Poll by {author.id}</h1>
      <img
        src={author.avatarURL}
        alt={`Profile of ${author.name}`}
        className="avatar"
      />

      <h2>Would you rather...</h2>

      <div className={votedForOptionOne ? "chosen" : ""}>
        <p>{question.firstChoice.text}</p>
        <button onClick={handleFirstChoice} disabled={hasVoted}>Click</button>
      </div>

      <div className={votedForOptionTwo ? "chosen" : ""}>
        <p>{question.secondChoice.text}</p>
        <button onClick={handleSecondChoice} disabled={hasVoted}>Click</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  try {
    const question = Object.values(questions).find(
      (question) => question.id === useParams().id
    );
    const author = Object.values(users).find((user) => user.id === question.author);
    return { authedUser, author, question };
  } catch (error) {
    throw new Error(`Question or user not found. ${error}`);
  }
};

export default connect(mapStateToProps)(PollPage);
