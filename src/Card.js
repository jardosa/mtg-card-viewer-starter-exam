import { cx, css } from "emotion";

import React, { useContext } from "react";
import Context from "./context/Context";
import reactStringReplace from "react-string-replace";

import ManaSymbol from "./ManaSymbol";

const Card = ({ cardDetails }) => {
  const manaCost = cardDetails?.manaCost;
  const context = useContext(Context);

  const textIconCodes = cardDetails?.text?.match(new RegExp("{.}", "gm"));
  const parsedIcons = textIconCodes?.map((text) =>
    text.toLowerCase().replace(new RegExp("[{}]", "gm"), "")
  );

  let replacedText;

  textIconCodes?.forEach((t, i, arr) => {
    if (i === 0) {
      replacedText = reactStringReplace(cardDetails.text, t, (match, i) => {
        return (
          <ManaSymbol
            className={[
              `ms`,
              "ms-cost",
              `ms-${
                parsedIcons[0].toUpperCase() === "T" ? "tap" : parsedIcons[0]
              }`
            ].join(" ")}
          />
        );
      });
    } else {
      replacedText = reactStringReplace(
        replacedText,
        textIconCodes[i],
        (match, i) => (
          <ManaSymbol
            className={[
              `ms`,
              "ms-cost",
              `ms-${
                parsedIcons[i].toUpperCase() === "T" ? "tap" : parsedIcons[1]
              }`
            ].join(" ")}
          />
        )
      );
    }
  });

  const manaCostArr = manaCost
    ?.replaceAll("{", "")
    .replaceAll("}", " ")
    .split(" ")
    .map(
      (color) =>
        color && (
          <ManaSymbol
            className={[
              `ms`,
              "ms-cost",
              `ms-${color.replace(/[{}]/, "").toLowerCase()}`
            ].join(" ")}
          />
        )
    );

  return (
    <div className="m-card">
      <div className="card-details-container">
        <div className="card-image">
          <img
            className={cx(
              css`
                background-color: ${context.state.theme === "light"
                  ? "#FFFFFF"
                  : "#292929"};
              `
            )}
            src={cardDetails.imageUrl}
            alt="Card"
          />
        </div>
        <div
          className={cx(
            css`
              color: ${context.state.theme === "light" ? "#292929" : "#FFFFFF"};
              border-radius: 0.25rem;
            `,
            "card-table"
          )}
        >
          <div
            className={cx(
              css`
                display: flex;
                justify-content: space-between;
              `,
              "card-detail-row"
            )}
          >
            <div>{cardDetails.name}</div>
            <div
              className={cx(css`
                display: flex;
                column-gap: 3px;
              `)}
            >
              {manaCostArr}
            </div>
          </div>
          <div className="card-detail-row">{cardDetails.type}</div>
          <div className="card-detail-row">
            <span>
              {replacedText ?? cardDetails.text ?? cardDetails.flavor}
            </span>
            {cardDetails.power && cardDetails.toughness && (
              <p>
                {cardDetails.power} / {cardDetails.toughness}
              </p>
            )}
          </div>
          <div className="card-detail-row">
            Illustrated by: {cardDetails.artist}
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Card;
