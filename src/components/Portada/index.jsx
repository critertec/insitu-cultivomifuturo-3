import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import {
  dialogLuisaWelcome,
  welcomeYeinerTutorial,
  reloadGame,
} from "../../store/action/questionsAction";

const Portada = () => {
  const dispatch = useDispatch();
  const { gameEnd, youWonTheGame, pounts, etapa, questionActive } = useSelector(
    (state) => state.question
  );

  useEffect(() => {
    welcomeTutorial();
  }, []);

  const welcomeTutorial = () => {
    if (etapa === "tutorial" && questionActive !== 5) {
      dispatch(welcomeYeinerTutorial());
    }
  };

  const reload = () => {
    dispatch(reloadGame());
  };
  return (
    <div id="portada">
      {gameEnd ? (
        <div className="flex flex-col justify-center">
          <p className="portada_small">
            {youWonTheGame && "¡Lo logramos!"} <p>{pounts}</p>Seguidores
          </p>
          <button onClick={reload} className="btn-next mt-8 ">
            Intentar nuevamente
          </button>
        </div>
      ) : (
        <p className="portada_big">Interferencia Convivencia</p>
      )}
    </div>
  );
};
export default Portada;
