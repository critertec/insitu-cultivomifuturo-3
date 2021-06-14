import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../CriterSmartphone.css";

//actions
import {
  selectedOptionQuestion,
  selectedOptionTutorial,
  showDialogYeiner,
} from "../../../store/action/questionsAction";

//data
import DataJson from "../../../Data/index.json";

const FirstEsenario = () => {
  const dispatch = useDispatch();
  const [selectedIcon, setSelectedIcon] = useState("all");
  const { etapa, subQuestion, questionActive } = useSelector(
    (state) => state.question
  );

  const first =
    DataJson[etapa][questionActive][subQuestion]["options"]["first"]["title"];
  const second =
    DataJson[etapa][questionActive][subQuestion]["options"]["second"]["title"];
  const three =
    DataJson[etapa][questionActive][subQuestion]["options"]["three"]["title"];

  useEffect(() => {
    dispatch(showDialogYeiner());
  }, [subQuestion]);

  const validateOption = (opt) => {
    if (etapa === "tutorial") {
      dispatch(selectedOptionTutorial());
    } else {
      dispatch(selectedOptionQuestion(opt, "respQuestion1"));
    }
    setSelectedIcon(opt);
  };
  return (
    <div id="escenario_expresion">
      <div className="expression_option">
        {selectedIcon === "all" ? (
          <button
            onClick={() => validateOption("first")}
            className="option_button"
          >
            A
          </button>
        ) : selectedIcon === "first" ? (
          <button className="option_button option_button_selected">A</button>
        ) : (
          <button className="option_button">A</button>
        )}
        <div className="option_label">{first}</div>
      </div>

      <div className="expression_option">
        {selectedIcon === "all" ? (
          <button
            onClick={() => validateOption("second")}
            className="option_button"
          >
            B
          </button>
        ) : selectedIcon === "second" ? (
          <button className="option_button option_button_selected">B</button>
        ) : (
          <button className="option_button">B</button>
        )}
        <div className="option_label">{second}</div>
      </div>

      <div className="expression_option">
        {selectedIcon === "all" ? (
          <button
            onClick={() => validateOption("three")}
            className="option_button"
          >
            C
          </button>
        ) : selectedIcon === "three" ? (
          <button className="option_button option_button_selected">C</button>
        ) : (
          <button className="option_button">C</button>
        )}
        <div className="option_label">{three}</div>
      </div>
    </div>
  );
};

export default FirstEsenario;
