import "./App.css";
import Input from "./Components/input";
import { useState } from "react";
import Board from "./Components/Board";
function App() {
  const [tasklist, setTasklist] = useState([]);

  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-xl font-semibold">To Do Board</h1>
        <Input tasklist={tasklist} setTasklist={setTasklist} />
        <div className="flex flex-col-3 gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12  ">
          {tasklist.map((task, index) => (
            <Board
              key={index}
              index={index}
              task={task}
              tasklist={tasklist}
              setTasklist={setTasklist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
