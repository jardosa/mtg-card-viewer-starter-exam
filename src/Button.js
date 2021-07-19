import { css, cx } from "emotion";
import React, { useContext } from "react";
import Context from "./context/Context";

export default React.forwardRef(function Button({children, ...props}) {
  const context = useContext(Context);
  return (
    <button
      className={cx(css`
        cursor: pointer;
        appearance: none;
        border: none;
        padding: 8px 12px;
        border-radius: 4px;
        background: ${context.state.theme === "light" ? "#292929" : "#FFFFFF"};
        font-size: 16px;
        line-height: 1;
        font-weight: bold;
        color: ${context.state.theme === "light" ? "#FFFFFF" : "#292929"};
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
      `)}
      {...props}
    >
      {children}
    </button>
  );
});
