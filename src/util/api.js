import { _getQuestions, _saveQuestion, _getUsers } from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({ users, questions })
  );
}

export function saveQuestion(choiceOneText, choiceTwoText, author) {
  return _saveQuestion({ choiceOneText, choiceTwoText, author });
}
