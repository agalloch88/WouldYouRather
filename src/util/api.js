import { _saveQuestion } from "./_DATA";

export function saveQuestion(choiceOneText, choiceTwoText, author) {
    return _saveQuestion({choiceOneText, choiceTwoText, author});
}