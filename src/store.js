import { configureStore } from "@reduxjs/toolkit";
import authedUser from "./reducers/authedUser";
import polls from "./reducers/polls";
import users from "./reducers/users";

export const store = configureStore({
  reducer: {
    authedUser,
    polls,
    users,
  },
});
