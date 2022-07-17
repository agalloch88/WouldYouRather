import React from "react";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

function App() {
  return (
    <div className="app__container">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/questions/:id" element={<PollPage />} />
        <Route path="/new" element={<NewPoll />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps)(App);
