import { AppProviderProps, IAppState } from "./types";
import React, { useReducer, useEffect } from "react";

import AppCtx from "./ctx";
import reducer from "./reducer";
import initialState from "./state";
import { ITaskItem } from "../../../types/data";

const AppProvider: React.FC<AppProviderProps> = ({
  children,
  onLoad = () => false,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    const appCtx = localStorage.getItem("AppCtx");
    if (appCtx) {
      try {
        return JSON.parse(appCtx) as IAppState;
      } catch {
        return init;
      }
    }
    return init;
  });

  useEffect(() => {
    const appCtx = localStorage.getItem("AppCtx");
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

    if (!appCtx) {
      fetch(`${API_URL}/example_data.json`)
        .then((r) => r.json())
        .then((r) =>
          dispatch({
            type: "setToDoList",
            payload: r as ITaskItem[],
          })
        );
    }

    onLoad(dispatch);
  }, [onLoad]);

  useEffect(() => {
    localStorage.setItem("AppCtx", JSON.stringify(state));
  }, [state]);

  return (
    <AppCtx.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export { AppProvider, AppCtx };
