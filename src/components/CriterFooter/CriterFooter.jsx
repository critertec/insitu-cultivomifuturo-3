import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CriterFooter.css";
import "./dialog.css";

//Dialog components
import DialogYeiner from "../Dialog/DialogYeiner";
import DialogLuisa from "../Dialog/DialogLuisa";

//actions
import { initGame, showDialogYeiner } from "../../store/action/questionsAction";

function CriterFooter() {
  const dispatch = useDispatch();
  const { luisa, yeiner, stage } = useSelector((state) => state.question);
  const { speakLuisa, dialogLuisa } = luisa;
  const { speakYeiner, dialogYeiner } = yeiner;
  const goInitGame = () => {
    dispatch(initGame());
  };

  return (
    <div id="footer">
      {stage === "welcome" && (
        <>
          <div className={`${speakLuisa}  bg_personaje relative`}>
            {dialogLuisa && <DialogLuisa showdialogYeiner={showDialogYeiner} />}
          </div>
          <div className={`${speakYeiner}  bg_personaje relative`}>
            {dialogYeiner && <DialogYeiner initGame={goInitGame} />}
          </div>
        </>
      )}
      {stage === "feedback_final" && (
        <>
          <div id="footer_final" className="bg_personaje"></div>
          <div id="luisa_frente" className="bg_personaje"></div>
          <div id="yeiner_frente" className="bg_personaje"></div>
        </>
      )}
    </div>
  );
}

export default CriterFooter;
