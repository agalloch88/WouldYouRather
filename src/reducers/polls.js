import { GET_QUESTIONS } from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
        return {
            ...state,
            ...action.questions,
        };
    default:
      return state;
  }
}
