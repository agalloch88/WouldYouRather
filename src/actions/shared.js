import { getInitialData } from "../util/api";
import { getUsers } from "./users";
import { getQuestions } from "./polls";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}