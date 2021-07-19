import { cx, css } from "emotion";
import React, { useContext } from "react";
import Context from "./context/Context";

const Loader = () => {
  const context = useContext(Context);
  return (
    <div
      className={cx(css`
        height: 100%;
        display: grid;
        place-items: center;
        color: ${context.state.theme === "light" ? "#292929" : "#FFFFFF"};
      `)}
    >
      <div>Loading Card</div>
    </div>
  );
};

export default Loader;
