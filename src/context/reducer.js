export const TOGGLE_THEME = "TOGGLE_THEME";

const toggleTheme = (state, payload) => {
  return { ...state, theme: payload === "light" ? "dark" : "light" };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return toggleTheme(state, action.payload);
    default:
      return state;
  }
};
