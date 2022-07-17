import { connect } from "react-redux";

const Nav = (props) => {
  return (
    <ul>
      <li>Dashboard here</li>
      <li>.</li>
      <li>.</li>
    </ul>
  );
};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(Nav);
