import { AppActionType, IAppState } from "./types";

import actions from "./actions";
import initialState from "./state";

function appReducer(state = initialState, action: AppActionType): IAppState {
  switch (action.type) {
    case "setToDoList":
      return actions.setToDoList(state, action.payload);
    case "addTask":
      return actions.addTask(state, action.payload);
    case "changeStatus":
      return actions.changeStatus(state, action.payload);

    default:
      throw new Error("Wrong action type in app reducer");
  }
}

export default appReducer;
