import React, { useReducer } from "react";
import Context from "./Context";
import { reducer, TOGGLE_THEME } from "./reducer";

export const GlobalState = (props) => {
  const [state, dispatch] = useReducer(reducer, { theme: "light" });

  const toggleTheme = (payload) => dispatch({ type: TOGGLE_THEME, payload });

  const initialState = {
    state,
    toggleTheme
  };
  return (
    <Context.Provider value={{ ...initialState }}>
      {props.children}
    </Context.Provider>
  );
};
