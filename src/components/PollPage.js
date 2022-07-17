import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { handleAddQuestionAnswer } from "../actions/polls";

const PollPage = ({ dispatch, user, question }) => {
    const navigate = useNavigate();

    const handleFirstChoice = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestionAnswer(question.id, "optionOne"));
        navigate("/");
    }

    const handleSecondChoice = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestionAnswer(question.id, "optionTwo"));
        navigate("/");
    }

  return (
    <div>
      <h1>Poll by {user.id}</h1>
      <img src={user.avatarURL} alt={`Profile of ${user.name}`} className="avatar" />

        <h2>Would you rather...</h2>

        <p>{question.firstChoice.text}</p>
        <button onClick={handleFirstChoice}>Click</button>

        <p>{question.secondChoice.text}</p>
        <button onClick={handleSecondChoice}>Click</button>
    </div>
  );
};

const mapStateToProps = ({users, questions}) => {
    try {
        const question =  Object.values(questions).find((question) => question.id === useParams().id);
        const author = question.author;
        const user = Object.values(users).find((user) => user.id === author);
        return { question, user };
    } catch (error) {
        throw new Error(`Question or user not found. ${error}`);
    }
};

export default connect(mapStateToProps)(PollPage);
