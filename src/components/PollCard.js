import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PollCard = ({question}) => {
    return (
        <div>
            <h3>{question.author}</h3>
            <p>{new Date(question.timestamp).toDateString()}</p>
            <Link to={`questions/${question.id}`}>Show</Link>
        </div>
    );
}

export default connect()(PollCard);