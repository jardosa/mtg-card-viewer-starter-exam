import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Button from "./Button";
import Card from "./Card";
import Loader from "./Loader";

import "./styles.css";
import { css, cx } from "emotion";
import Context from "./context/Context";

axios.defaults.baseURL = "https://api.magicthegathering.io/";

const getRandomCard = async (setState) => {
  const randomCardNumber = Math.floor(Math.random() * 1000) + 1;

  try {
    setState((prevState) => ({
      loading: true,
      card: { ...prevState.card }
    }));
    const {
      data: { card }
    } = await axios.get(`/v1/cards/${randomCardNumber}`);
    setState((prevState) => ({
      loading: false,
      card: { ...card }
    }));
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  const [state, setState] = useState({
    loading: false,
    card: {}
  });

  const context = useContext(Context);

  useEffect(() => {
    getRandomCard(setState);
  }, []);

  return (
    <div
      className={cx(css`
        height: 100vh;
        background-color: ${context.state.theme === "light"
          ? "#FFFFFF"
          : "#292929"};
        position: relative;
        display: grid;
        place-items: center;
      `)}
    >
      <div
        className={cx(css`
          margin: auto;
          max-width: 720px;
          height: 350px;
        `)}
      >
        {state.loading && <Loader />}
        {!state.loading && <Card cardDetails={state.card} />}
        <div
          className={css(css`
            width: 100%;
            display: grid;
            place-items: center;
          `)}
        ></div>
        <div
          className={cx(css`
            width: auto;
            display: flex;
            column-gap: 10px;
            justify-content: center;
          `)}
        >
          <Button
            disabled={state.loading}
            onClick={() => getRandomCard(setState)}
          >
            Get Random Card
          </Button>
          <div
            className={cx(css`
              position: fixed;
              top: 20px;
              right: 20px;
            `)}
          >
            <Button onClick={() => context.toggleTheme(context?.state?.theme)}>
              Toggle Theme
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
