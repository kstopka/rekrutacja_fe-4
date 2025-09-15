import { ITaskItem } from "../../../../types/data";
import actions from "../actions";

describe("AppActions", () => {
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

  it("setToDoList should return the correct state", () => {
    const expectedState = {
      ...mockInitialState,
      toDoList: mockTasks,
    };
    expect(actions.setToDoList(mockInitialState, mockTasks)).toEqual(
      expectedState
    );
  });
  it("addTask should return the correct state", () => {
    const expectedState = {
      ...mockInitialState,
      toDoList: [{ title: "New Task", status: "planowane" }],
    };
    expect(actions.addTask(mockInitialState, "New Task")).toEqual(
      expectedState
    );
  });
  it("changeStatus should return the correct state", () => {
    const payload = { index: 0, status: "w trakcie" as const };
    const expectedState = {
      ...mockStateWithTasks,
      toDoList: [
        { ...mockTasks[0], status: "w trakcie" },
        mockTasks[1],
        mockTasks[2],
      ],
    };
    expect(actions.changeStatus(mockStateWithTasks, payload)).toEqual(
      expectedState
    );
  });
});
