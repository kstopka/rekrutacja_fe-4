import { ITaskItem, StatusType } from "../../../types/data";
import { IAppState } from "./types";

class AppActions {
  setToDoList = (state: IAppState, payload: ITaskItem[]) => ({
    ...state,
    toDoList: payload,
  });
  addTask = (state: IAppState, payload: string) => ({
    ...state,
    toDoList: [
      ...state.toDoList,
      {
        title: payload,
        status: "planowane" as StatusType,
      },
    ],
  });
  changeStatus = (
    state: IAppState,
    payload: { index: number; status: StatusType }
  ) => ({
    ...state,
    toDoList: state.toDoList.map((item, idx) =>
      idx === payload.index ? { ...item, status: payload.status } : item
    ),
  });
}

const actions = new AppActions();
export default actions;
