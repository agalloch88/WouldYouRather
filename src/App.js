import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";
import NewPoll from "./components/NewPoll";
import PollPage from "./components/PollPage";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";

function App({ dispatch, loggedIn }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div className="container mx-auto py-4">
      {loggedIn && <Nav />}
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          exact
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions/:id"
          element={
            <ProtectedRoute>
              <PollPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          exact
          element={
            <ProtectedRoute>
              <NewPoll />
            </ProtectedRoute>
          }
        />
        <Route path="/404" exact element={<NotFound />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(App);
