export const QUESTION_START = "QUESTION_START";
export const QUESTION_END = "QUESTION_END";
export const QUESTION_FAIL = "QUESTION_FAIL";
export const QUESTION_SUCCESS = "QUESTION_SUCCESS";

let initialState = {
  pounts: 3300,
  minPounts: 3500,
  questionActive: 1,
  subQuestion: "a",
  gameEnd: false,
  youWonTheGame: false,
  listSectionAlternal: [],
  respQuestion1: "",
  respQuestion2: false,
  instructions: true,
  etapa: "tutorial",
  stage: "welcome",
  section: "welcome",
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
  loading: false,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case QUESTION_START: {
      return { ...state, loading: true, error: null };
    }

    case QUESTION_END: {
      return { ...state, loading: false };
    }

    case QUESTION_FAIL: {
      return { ...state, error: payload, loading: false };
    }

    case QUESTION_SUCCESS: {
      return {
        ...state,
        ...payload,
        error: false,
      };
    }
    default:
      return state;
  }
}
