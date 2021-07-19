import React from "react";

const Context = React.createContext({
  state: {
    theme: "light",
  },
  toggleTheme: () => {
    console.log("Change Color Theme");
  },
});

export default Context;
