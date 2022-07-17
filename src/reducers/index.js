import authedUser from "./authedUser";
import polls from "./polls";
import users from "./users";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
    authedUser,
    polls,
    users,
});