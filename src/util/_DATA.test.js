const { _saveQuestionAnswer } = require("./_DATA");
describe("_saveQuestionAnswer", () => {
  it("should return true for correct parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });

    expect(response).toBeTruthy();
  });

  it("should return error for false parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: undefined,
      answer: "optionOne",
    }).catch((e) => e);

    expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});

const { _saveQuestion } = require("./_DATA");
describe("_saveQuestion", () => {
  it("should return true for correct parameters", async () => {
    const response = await _saveQuestion({
      optionOne: "optionOneText",
      optionTwo: "optionTwoText",
      author: "sarahedo",
    }).catch((e) => e);

    expect(response).toBeTruthy();
  });

  it("should return error for false parameters", async () => {
    const response = await _saveQuestion({
      optionOne: undefined,
      optionTwo: undefined,
      author: undefined,
    }).catch((e) => e);

    expect(response).toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
