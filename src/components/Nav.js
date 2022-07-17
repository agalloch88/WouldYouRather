import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../actions/authedUser";

const Nav = ({ dispatch, authedUserId }) => {
    const logout = (e) => {
        e.preventDefault();
        dispatch(handleLogout());
    }

  return (
    <nav className="nav__container">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
                Currently Signed In as: {authedUserId}
            </li>
            <li>
                <button onClick={logout}>Sign Out</button>
            </li>
        </ul>
    </nav>
  );
};

const mapStateToProps = ({authedUser}) => ({
    authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(Nav);
