import React from "react";
import { useSelector, useDispatch } from "react-redux";

//data
import DataJSON from "../../Data/index.json";

//actions
import { welcomeLuisaTutorial } from "../../store/action/questionsAction";

const DialogYeiner = ({ initGame }) => {
  const dispatch = useDispatch();

  const {
    etapa,
    questionActive,
    subQuestion,
    gameEnd,
    youWonTheGame,
  } = useSelector((state) => state.question);
  const styledTitle =
    DataJSON[etapa][questionActive][subQuestion]["styled-title"] ||
    "text-title-dialog-white";

  const textTitle = DataJSON[etapa][questionActive][subQuestion].intro || false;

  const styledTextBody =
    DataJSON[etapa][questionActive][subQuestion]["styled-body-text"] || "";

  const textBody =
    etapa === "inicio"
      ? DataJSON[etapa][questionActive][subQuestion].intro.body || false
      : "";

  const styledTextFooter =
    DataJSON[etapa][questionActive][subQuestion]["styled-footer-text"] || "";

  const textFooter =
    DataJSON[etapa][questionActive][subQuestion].footer || false;

  const btnNext = DataJSON[etapa][questionActive][subQuestion].button || false;

  const backgroundColor =
    DataJSON[etapa][questionActive][subQuestion]["background-color"] ||
    "background-dialog-green-light";

  const containerDialog =
    DataJSON[etapa][questionActive][subQuestion].container || "dialog-right";

  const ganaste = youWonTheGame ? "success" : "warning";
  const textTitleFeedBack = DataJSON["feedback"][ganaste].title;
  const textBodyFeedBack = DataJSON["feedback"][ganaste].body;

  const fun = () => {
    if (etapa === "tutorial") {
      dispatch(welcomeLuisaTutorial());
    } else {
      initGame();
    }
  };

  return (
    <>
      {gameEnd ? (
        <div
          className={`dialog-right background-dialog-crem absolute box-shadow-background-dialog-left`}
        >
          {textTitleFeedBack && (
            <p className={"text-title-dialog-blue"}>{textTitleFeedBack}</p>
          )}
          {textBodyFeedBack && (
            <p className={"text-body-dialog-blue"}>{textBodyFeedBack}</p>
          )}
          <div className="triangule-right absolute" />
        </div>
      ) : (
        <div
          className={`${containerDialog} ${backgroundColor} absolute box-shadow-background-dialog-right`}
        >
          {textTitle && <p className={styledTitle}>{textTitle}</p>}
          {textBody && (
            <p className={styledTextBody}>
              {textBody} <span className={styledTextFooter}>{textFooter}</span>
            </p>
          )}
          <button className="btn-next absolute" onClick={fun}>
            {btnNext}{" "}
          </button>
          <div className="triangule-right absolute" />
        </div>
      )}
    </>
  );
};
export default DialogYeiner;
