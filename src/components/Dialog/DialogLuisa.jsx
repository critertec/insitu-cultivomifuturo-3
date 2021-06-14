import React from "react";
import { useSelector, useDispatch } from "react-redux";

//data
import DataJSON from "../../Data/index.json";

//action
import {
  nextQuestionLuisa,
  nextSectionLuisa,
  welcomeYeinerTutorial,
} from "../../store/action/questionsAction";

const DialogLuisa = () => {
  const dispatch = useDispatch();
  const {
    etapa,
    questionActive,
    subQuestion,
    respQuestion2,
    respQuestion1,
    gameEnd,
    youWonTheGame,
  } = useSelector((state) => state.question);

  const option = respQuestion1
    ? respQuestion1
    : respQuestion2
    ? respQuestion2
    : "first";
  console.log("option : ", respQuestion2);

  // const styledTitle =
  //   DataJSON[etapa][questionActive][subQuestion]["styled-title"] ||
  //   "text-title-dialog-blue";

  // const textTitle =
  //   etapa === "question"
  //     ? DataJSON[etapa][questionActive][subQuestion]["options"][option][
  //         "retroalimentacion"
  //       ].title || false
  //     : "";

  const styledTextBody =
    DataJSON[etapa][questionActive][subQuestion]["styled-body-text"] ||
    "text-body-dialog-blue";

  const textBody =
    etapa === "question"
      ? DataJSON[etapa][questionActive][subQuestion]["options"][option][
          "retroalimentacion"
        ].body || false
      : etapa === "tutorial" && questionActive === 4
      ? DataJSON[etapa][questionActive][subQuestion]["options"][option][
          "retroalimentacion"
        ].body || false
      : DataJSON[etapa][questionActive][subQuestion]["intro-luisa"].body;

  const textBodyFeedback =
    subQuestion === "b" &&
    DataJSON[etapa][questionActive][subQuestion]["options"]
      ? DataJSON[etapa][questionActive][subQuestion]["options"][option][
          "feedback"
        ]
      : false;

  console.log("textBodyFeedback || textBody: ", textBodyFeedback, textBody);

  const newTextBodyFeedBack = textBodyFeedback || textBody;

  console.log("newTextBodyFeedBack : ", newTextBodyFeedBack);

  const styledTextFooter =
    DataJSON[etapa][questionActive][subQuestion]["styled-footer-text"] || "";

  const textFooter =
    etapa === "question"
      ? DataJSON[etapa][questionActive][subQuestion].footer || false
      : etapa === "tutorial" && questionActive === 4
      ? DataJSON[etapa][questionActive][subQuestion].footer || false
      : DataJSON[etapa][questionActive][subQuestion]["intro-luisa"].footer;

  const containerDialog =
    DataJSON[etapa][questionActive][subQuestion].container ||
    "dialog-left-medium";

  const btnNext =
    DataJSON[etapa][questionActive][subQuestion].button || "SIGUIENTE";

  const backgroundColor =
    DataJSON[etapa][questionActive][subQuestion]["background-color"] ||
    "background-dialog-crem";

  const ganaste = youWonTheGame ? "success" : "warning";
  const textTitleFeedBack = DataJSON["feedback"][ganaste].title;
  const textBodyFeedBack = DataJSON["feedback"][ganaste].body;

  const showdialogYeiner = () => {
    if (etapa === "tutorial") {
      dispatch(welcomeYeinerTutorial());
    } else if (subQuestion === "b") {
      dispatch(nextSectionLuisa());
    } else {
      dispatch(nextQuestionLuisa());
    }
  };
  return (
    <>
      {gameEnd ? (
        <div
          className={`dialog-left background-dialog-crem absolute box-shadow-background-dialog-left`}
        >
          {textTitleFeedBack && (
            <p className={"text-title-dialog-blue"}>{textTitleFeedBack}</p>
          )}
          {textBodyFeedBack && (
            <p className={"text-body-dialog-blue"}>{textBodyFeedBack}</p>
          )}
          <div className="triangule-left absolute" />
        </div>
      ) : (
        <div
          className={`${containerDialog} ${backgroundColor} absolute box-shadow-background-dialog-left`}
        >
          {/* {textTitle && <p className={styledTitle}>{textTitle}</p>} */}
          {newTextBodyFeedBack && (
            <p className={styledTextBody}>
              {newTextBodyFeedBack}
              <span className={styledTextFooter}>{textFooter}</span>
            </p>
          )}
          <button onClick={showdialogYeiner} className="btn-next absolute">
            {btnNext}{" "}
          </button>
          <div className="triangule-left absolute" />
        </div>
      )}
    </>
  );
};
export default DialogLuisa;
