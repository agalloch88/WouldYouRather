import { connect } from "react-redux";
import PollCard from "./PollCard";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>New Questions</h2>
      <ul>
        {Object.values(props.questions)
          .filter((question) => true)
          .map((question) => (
            <li key={question.id}>
                {question.id}
                <PollCard question={question} />
            </li>
          ))}
      </ul>
      <h2>Completed Questions</h2>
      <ul>
        {Object.values(props.questions)
          .filter((question) => true)
          .map((question) => (
            <li key={question.id}>
                {question.id}
                <PollCard question={question} />
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions }) => ({
  questions,
});

export default connect(mapStateToProps)(Dashboard);
