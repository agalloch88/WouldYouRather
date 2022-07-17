import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard here</h1>
    </div>
  );
};

const mapStateToProps = ({questions}) => ({
    questions,
});

export default connect(mapStateToProps)(Dashboard);
