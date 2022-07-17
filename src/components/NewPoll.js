import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewPoll = ({ dispatch }) => {
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");
  const navigate = useNavigate();

  const handleFirstChoiceChange = (e) => {
    const value = e.target.value;
    setFirstChoice(value);
  };

  const handleSecondChoiceChange = (e) => {
    const value = e.target.value;
    setSecondChoice(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: dispatch action to create new poll
    navigate("/");
  };
  return (
    <div>
      <h1>New Poll</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstChoice">First Choice</label>
        <input
          type="text"
          id="firstChoice"
          value={firstChoice}
          onChange={handleFirstChoiceChange}
        />
        <label htmlFor="secondChoice">Second Choice</label>
        <input
          type="text"
          id="secondChoice"
          value={secondChoice}
          onChange={handleSecondChoiceChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(NewPoll);
