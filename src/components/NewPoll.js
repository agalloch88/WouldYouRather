import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/polls";

const NewPoll = ({ dispatch }) => {
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");
  const navigate = useNavigate();

  const handleFirstChoiceChange = (e) => {
    const value = e.target.value;
    setFirstChoice(value);
  };

  const handleSecondChoiceChange = (e) => {
    const value = e.target.value;
    setSecondChoice(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(firstChoice, secondChoice));
    navigate("/");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mt-9">New Poll</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label
            htmlFor="firstChoice"
            className="block text-sm font-medium text-slate-700"
          >
            First Choice
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="firstChoice"
              value={firstChoice}
              onChange={handleFirstChoiceChange}
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="secondChoice"
            className="block text-sm font-medium text-slate-700"
          >
            Second Choice
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="secondChoice"
              value={secondChoice}
              onChange={handleSecondChoiceChange}
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
            />
          </div>
        </div>
        <div className="mt-6 text-right">
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
