import { saveQuestion, saveQuestionAnswer } from "../util/api";
import { addUserAnswer, addUserQuestion } from "./users";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const GET_QUESTIONS = "GET_QUESTIONS";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addQuestionAnswer(author, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    author,
    qid,
    answer,
  };
}

export function handleAddQuestion(firstChoice, secondChoice) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion(firstChoice, secondChoice, authedUser).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
      }
    );
  };
}

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

export function handleAddQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer(authedUser.id, qid, answer).then(() => {
      dispatch(addQuestionAnswer(authedUser.id, qid, answer));
      dispatch(addUserAnswer(authedUser.id, qid, answer));
    });
  };
}
