import { getInitialData } from "../util/api";
import { getUsers } from "./users";
import { getQuestions } from "./polls";
import { setAuthedUser } from "./authedUser";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(JSON.parse(sessionStorage.getItem("authedUser"))));
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}
