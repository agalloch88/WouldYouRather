import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleLogout } from "../actions/authedUser";

const Nav = ({ dispatch, authedUserId }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  return (
    <nav className="flex justify-center space-x-4">
      <Link
        to="/"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Home
      </Link>
      <Link
        to="/leaderboard"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Leaderboard
      </Link>
      <Link
        to="/add"
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        New Poll
      </Link>
      <span className="font-medium px-3 py-2 text-slate-700" data-testid="user">
       Currently Signed In as: {authedUserId}
      </span>
      <button
        onClick={logout}
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
      >
        Sign Out
      </button>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
});

export default connect(mapStateToProps)(Nav);
