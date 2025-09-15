import { ReactNode, Dispatch } from "react";
import { ITaskItem, StatusType } from "../../../types/data";

interface IAppState {
  toDoList: ITaskItem[];
}

type AppActionType =
  | {
      type: "setToDoList";
      payload: ITaskItem[];
    }
  | { type: "addTask"; payload: string }
  | { type: "changeStatus"; payload: { index: number; status: StatusType } };

interface IAppActions {
  setToDoList: (value: ITaskItem[]) => void;
  addTask: (value: string) => void;
  changeStatus: (value: { index: number; status: StatusType }) => void;
}

interface AppProviderProps {
  children: ReactNode;
  onLoad?: (dispatch: Dispatch<AppActionType>) => void;
}

interface IAppContext {
  state: IAppState;
  dispatch: Dispatch<AppActionType>;
}

export type {
  IAppState,
  IAppActions,
  AppActionType,
  AppProviderProps,
  IAppContext,
};
