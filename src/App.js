import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import "./App.css";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div className="app__container">
      <Nav />
      {false ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/questions/:id" element={<PollPage />} />
          <Route path="/new" element={<NewPoll />} />
        </Routes>
      )}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
