import React, { JSX, useState, useCallback, useMemo } from "react";
import {
  useActions,
  IAppActions,
  AppCtx,
  useContextState,
  IAppState,
} from "../../contexted";
import { AppProps } from "./types";
import TaskItem from "../TaskItem";
import "./styles.css";

const App: React.FC<AppProps> = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const { addTask } = useActions<IAppActions>(AppCtx, ["addTask"]);
  const { toDoList } = useContextState<IAppState>(AppCtx, ["toDoList"]);

  const addTodo = useCallback(() => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue("");
    }
  }, [addTask, inputValue]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  const tasks = useMemo(
    () =>
      toDoList.map(({ title, status }, index) => (
        <TaskItem
          title={title}
          status={status}
          index={index}
          key={`${title}-${index}`}
        />
      )),
    [toDoList]
  );

  return (
    <div className="App">
      <h1>Lista zadań</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Dodaj swoje zadanie..."
        />
        <button onClick={addTodo}>Dodaj zadanie</button>
      </div>
      {toDoList.length > 0 && <ul>{tasks}</ul>}
    </div>
  );
};

export default App;
