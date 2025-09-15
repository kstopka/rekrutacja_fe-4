import { ITaskItem } from "../../../../types/data";
import appReducer from "../reducer";

describe("appReducer", () => {
  const mockTasks: ITaskItem[] = [
    { title: "Task 1", status: "planowane" },
    { title: "Task 2", status: "w trakcie" },
    { title: "Task 3", status: "zakończone" },
  ];
  const mockInitialState = {
    toDoList: [],
  };

  const mockStateWithTasks = {
    toDoList: mockTasks,
  };

  it("should handle setToDoList", () => {
    const action = { type: "setToDoList" as const, payload: mockTasks };
    expect(appReducer(mockInitialState, action)).toEqual(mockStateWithTasks);
  });
  it("should handle addTask", () => {
    const action = { type: "addTask" as const, payload: "New Task" };
    const expectedState = {
      ...mockInitialState,
      toDoList: [{ title: "New Task", status: "planowane" }],
    };
    expect(appReducer(mockInitialState, action)).toEqual(expectedState);
  });
  it("should handle changeStatus", () => {
    const action = {
      type: "changeStatus" as const,
      payload: { index: 0, status: "w trakcie" as const },
    };
    const expectedState = {
      ...mockStateWithTasks,
      toDoList: [
        { ...mockTasks[0], status: "w trakcie" },
        mockTasks[1],
        mockTasks[2],
      ],
    };
    expect(appReducer(mockStateWithTasks, action)).toEqual(expectedState);
  });
  it("should throw an error for wrong action type", () => {
    const action = { type: "WRONG_ACTION" } as any;
    expect(() => appReducer(mockInitialState, action)).toThrow(
      "Wrong action type in app reducer"
    );
  });
});
