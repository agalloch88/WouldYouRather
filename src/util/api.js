import {
  _getQuestions,
  _saveQuestion,
  _getUsers,
  _saveQuestionAnswer,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({ users, questions })
  );
}

export function saveQuestion(choiceOneText, choiceTwoText, author) {
  return _saveQuestion({ choiceOneText, choiceTwoText, author });
}

export function saveQuestionAnswer(authedUserId, qid, answer) {
  return _saveQuestionAnswer({
    authedUser: authedUserId,
    qid,
    answer,
  });
}
