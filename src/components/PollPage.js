import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const PollPage = ({ users, questions }) => {
  const { id } = useParams();
  const { question, user } = initRequiredData(id, questions, users);

  return (
    <div>
      <h1>Poll by {user.id}</h1>
      <img src={user.avatarURL} alt={`Profile of ${user.name}`} className="avatar" />

        <h2>Would you rather...</h2>

        <p>{question.firstChoice.text}</p>
        <button>Click</button>

        <p>{question.secondChoice.text}</p>
        <button>Click</button>
    </div>
  );
};

const initRequiredData = (users, questions, questionId) => {
    try {
        const question = Object.values(questions).find((question) => question.id === questionId);
        const author = question.author;
        const user = Object.values(users).find((user) => user.id === author);
        return { question, user };
    } catch (error) {
        throw new Error(`Question or user not found. ${error}`);
    }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(PollPage);
