import { connect } from "react-redux";

const NewPoll = (props) => {
  return (
    <div>
      <h1>New Poll here</h1>
    </div>
  );
};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(NewPoll);
