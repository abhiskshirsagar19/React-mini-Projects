import { useState } from "react";
const Input = ({ tasklist, setTasklist }) => {
  const [input, setInput] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    setTasklist([...tasklist, input]);
    setInput("");
  };
  return (
    <>
      <form className="flex flex-row items-center gap-5">
        <input
          className="border rounded-lg py-1.5 px-2.5 text-lg"
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-violet-400 text-white py-2 px-3.5 rounded-lg font-semibold hover:opacity-60"
          onClick={handleAddTask}
        >
          Add
        </button>
      </form>
    </>
  );
};
export default Input;
