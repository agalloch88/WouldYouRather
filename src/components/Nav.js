import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Nav = (props) => {
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
                <Link to="/new">New Poll</Link>
            </li>
            <li>
                <Link to="/">Sign In/Sign Out</Link>
            </li>
        </ul>
    </nav>
  );
};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Nav);
