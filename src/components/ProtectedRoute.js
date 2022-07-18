import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ children, loggedIn }) => {
  return loggedIn ? children : <Navigate to="/login" />;
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(ProtectedRoute);
