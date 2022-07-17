export const GET_USERS = "GET_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function addUserAnswer(authedUser, qid, answer) {
    return {
        type: ADD_USER_ANSWER,
        authedUser,
        qid,
        answer,
    };
}
