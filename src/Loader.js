import { cx, css } from "emotion";
import React from "react";

const Loader = () => {
  return <div className={cx(css`
  height: 100%;
  display: grid;
  place-items: center;
  
  `)}>Loading Card</div>;
};

export default Loader;
