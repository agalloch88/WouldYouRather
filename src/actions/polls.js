import { saveQuestion } from "../util/api";

export const ADD_QUESTION = "ADD_QUESTION";
export const GET_QUESTIONS = "GET_QUESTIONS";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(firstChoice, secondChoice) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion(firstChoice, secondChoice, authedUser).then(
      (question) => dispatch(addQuestion(question))
    );
  };
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}
