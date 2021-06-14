import {
  QUESTION_START,
  QUESTION_END,
  QUESTION_FAIL,
  QUESTION_SUCCESS,
} from "../reducer/questionsReducer";

//data
import DataJSON from "../../Data/index.json";

//utils
import { getRandomInt } from "../../utils";

export const showDialogLuisa = () => async (dispatch, getStore) => {
  dispatch({ type: QUESTION_START });
  const { luisa } = getStore().question;

  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      luisa: {
        speakLuisa: "luisa_speak",
        dialogLuisa: true,
      },
      yeiner: {
        dialogYeiner: false,
        speakYeiner: "yeiner_welcome",
      },
    },
  });
  dispatch({ type: QUESTION_END });
};

export const showDialogYeiner = () => async (dispatch, getStore) => {
  dispatch({ type: QUESTION_START });
  const { yeiner } = getStore().question;

  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      // section: "inicio",
      luisa: {
        speakLuisa: "luisa_welcome",
        dialogLuisa: false,
      },
      yeiner: {
        dialogYeiner: true,
        speakYeiner: "yeiner_speak",
      },
    },
  });
  dispatch({ type: QUESTION_END });

  // const numberDialog = animationDialogLuisa.luisa.substring(7, 8);
};

export const nextQuestionLuisa = () => async (dispatch, getStore) => {
  dispatch({ type: QUESTION_START });

  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      subQuestion: "b",
      luisa: {
        speakLuisa: "luisa_welcome",
        dialogLuisa: false,
      },
      yeiner: {
        dialogYeiner: true,
        speakYeiner: "yeiner_speak",
      },
    },
  });
  dispatch({ type: QUESTION_END });
};

export const nextSectionLuisa = () => async (dispatch, getStore) => {
  dispatch({ type: QUESTION_START });
  const {
    listSectionAlternal,
    subQuestion,
    pounts,
    minPounts,
  } = getStore().question;

  let subquestion = subQuestion === "b" ? "a" : "b";
  if (listSectionAlternal && listSectionAlternal.length < 6) {
    const numberSectionActive = getRandomInt(1, 10, listSectionAlternal);

    dispatch({
      type: QUESTION_SUCCESS,
      payload: {
        subQuestion: subquestion,
        questionActive: numberSectionActive,
        listSectionAlternal:
          subQuestion === "a"
            ? listSectionAlternal
            : [...listSectionAlternal, numberSectionActive],
        luisa: {
          speakLuisa: "luisa_welcome",
          dialogLuisa: false,
        },
        yeiner: {
          dialogYeiner: false,
          speakYeiner: "yeiner_welcome",
        },
      },
    });
  } else {
    dispatch({
      type: QUESTION_SUCCESS,
      payload: {
        gameEnd: true,
        youWonTheGame: pounts >= minPounts ? true : false,
        luisa: {
          speakLuisa: "luisa_welcome",
          dialogLuisa: false,
        },
        yeiner: {
          dialogYeiner: false,
          speakYeiner: "yeiner_welcome",
        },
      },
    });
  }
  dispatch({ type: QUESTION_END });
};

export const reloadGame = () => async (dispatch) => {
  dispatch({ type: QUESTION_START });
  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      pounts: 3300,
      minPounts: 3500,
      questionActive: 1,
      subQuestion: "b",
      gameEnd: false,
      youWonTheGame: false,
      listSectionAlternal: [],
      respQuestion1: "",
      respQuestion2: false,
      instructions: false,
      etapa: "tutorial",
      stage: "welcome",
      section: "welcome",
      luisa: {
        speakLuisa: "luisa_speak",
        dialogLuisa: true,
        luisa: "dialog-1",
      },
      yeiner: {
        speakYeiner: "yeiner_welcome",
        dialogYeiner: false,
        yeiner: "dialog-1",
      },
    },
  });
  dispatch({ type: QUESTION_END });
};

export const initGame = () => async (dispatch, getStore) => {
  dispatch({ type: QUESTION_START });
  const { listSectionAlternal } = getStore().question;

  const numberSectionActive = getRandomInt(1, 10, listSectionAlternal);

  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      section: "inicio",
      etapa: "question",
      questionActive: numberSectionActive,
      listSectionAlternal: [numberSectionActive],
      yeiner: {
        dialogYeiner: true,
        speakYeiner: "yeiner_speak",
      },
    },
  });

  dispatch({ type: QUESTION_END });
};

export const selectedOptionQuestion = (opt, numberQuestion) => async (
  dispatch,
  getState
) => {
  dispatch({ type: QUESTION_START });

  console.log("seguda etapa : ", opt, numberQuestion);

  const { questionActive, subQuestion, pounts } = getState().question;
  const respQuestion =
    DataJSON.question[questionActive][subQuestion]["options"]["correct"];
  const pountsQuestion =
    DataJSON.question[questionActive][subQuestion]["options"]["pounts"];
  // let resp = opt;
  let accumulated = pounts;
  if (opt === respQuestion) {
    if (numberQuestion === "respQuestion2") {
      accumulated = pounts + pountsQuestion;
    }
  }

  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      respQuestion1: numberQuestion === "respQuestion1" ? opt : "",
      respQuestion2: numberQuestion === "respQuestion2" ? opt : false,
      // [numberQuestion]: opt,
      pounts: accumulated,
      luisa: {
        speakLuisa: "luisa_speak",
        dialogLuisa: true,
      },
      yeiner: {
        dialogYeiner: false,
        speakYeiner: "yeiner_welcome",
      },
    },
  });

  dispatch({ type: QUESTION_END });
};

export const selectedOptionTutorial = () => async (dispatch) => {
  dispatch({
    type: QUESTION_START,
  });

  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      luisa: {
        speakLuisa: "luisa_speak",
        dialogLuisa: true,
      },
    },
  });

  dispatch({
    type: QUESTION_END,
  });
};

export const instructionsClose = () => async (dispatch, getStore) => {
  dispatch({ type: QUESTION_START });
  const { listSectionAlternal, etapa } = getStore().question;

  const numberSectionActive =
    etapa === "tutorial" ? 1 : getRandomInt(1, 10, listSectionAlternal);

  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      instructions: false,
      questionActive: numberSectionActive,
      listSectionAlternal: etapa === "tutorial" ? [] : [numberSectionActive],
    },
  });
  dispatch({ type: QUESTION_END });
};

export const feedback = () => async (dispatch) => {
  dispatch({ type: QUESTION_START });

  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      section: "inicio",
      luisa: {
        speakLuisa: "luisa_speak",
        dialogLuisa: true,
      },
      yeiner: {
        speakYeiner: "yeiner_speak",
        dialogYeiner: true,
      },
    },
  });

  dispatch({ type: QUESTION_END });
};

export const welcomeYeinerTutorial = () => async (dispatch, getState) => {
  dispatch({ type: QUESTION_START });
  const {
    subQuestion,
    questionActive,
    listSectionAlternal,
    etapa,
  } = getState().question;

  const quesAct =
    subQuestion === "b"
      ? questionActive + 1
      : questionActive === 4 && subQuestion === "a"
      ? questionActive
      : 1;

  const subQues =
    subQuestion === "b"
      ? "a"
      : questionActive === 4 && subQuestion === "a"
      ? "b"
      : "a";

  const actInit = questionActive >= 3 ? "inicio" : "welcome";
  const actInitb = quesAct >= 5 && "welcome";

  if (questionActive === 6) {
    const numberSectionActive = getRandomInt(1, 10, listSectionAlternal);

    dispatch({
      type: QUESTION_SUCCESS,
      payload: {
        instructions: false,
        questionActive: numberSectionActive,
        listSectionAlternal: [numberSectionActive],
        pounts: 3300,
        minPounts: 3500,
        subQuestion: "a",
        gameEnd: false,
        youWonTheGame: false,
        respQuestion1: "",
        respQuestion2: false,
        etapa: "question",
        stage: "welcome",
        section: "inicio",
        luisa: {
          speakLuisa: "luisa_welcome",
          dialogLuisa: false,
          luisa: "dialog-1",
        },
        yeiner: {
          speakYeiner: "yeiner_welcome",
          dialogYeiner: false,
          yeiner: "dialog-1",
        },
      },
    });
  } else {
    if (DataJSON[etapa][quesAct][subQues].intro === false) {
      dispatch({
        type: QUESTION_SUCCESS,
        payload: {
          yeiner: {
            dialogYeiner: false,
            speakYeiner: "yeiner_welcome",
          },
          luisa: {
            speakLuisa: "luisa_speak",
            dialogLuisa: true,
          },
          subQuestion: "b",
          questionActive: quesAct,
          section: actInitb || actInit,
        },
      });
    } else {
      dispatch({
        type: QUESTION_SUCCESS,
        payload: {
          yeiner: {
            dialogYeiner: true,
            speakYeiner: "yeiner_speak",
          },
          luisa: {
            speakLuisa: "luisa_welcome",
            dialogLuisa: false,
          },
          subQuestion: subQues,
          questionActive: quesAct,
          section: actInitb || actInit,
        },
      });
    }
  }

  dispatch({ type: QUESTION_END });
};
export const welcomeLuisaTutorial = () => async (dispatch, getState) => {
  dispatch({ type: QUESTION_START });

  const { subQuestion } = getState().question;

  const subQues = subQuestion === "a" ? "b" : "a";

  dispatch({
    type: QUESTION_SUCCESS,
    payload: {
      luisa: {
        speakLuisa: "luisa_speak",
        dialogLuisa: true,
      },
      yeiner: {
        dialogYeiner: false,
        speakYeiner: "yeiner_welcome",
      },
      subQuestion: subQues,
    },
  });

  dispatch({ type: QUESTION_END });
};
