import React from "react";
import { useSelector, useDispatch } from "react-redux";

//styled
import "./styled.css";

//assets
import vect_botones from "../../assets/vectores/CEL_BOTONES.svg";
import vect_home from "../../assets/vectores/CEL_HOME.svg";

//Components
import CriterSmartphone from "../CriterSmartphone/CriterSmartphone";
import Portada from "../Portada";

//actions
import { reloadGame } from "../../store/action/questionsAction";

const ContainerPhone = () => {
  const dispatch = useDispatch();
  const { section, pounts, gameEnd } = useSelector((state) => state.question);
  const reload = () => {
    dispatch(reloadGame());
  };

  return (
    <div className="container-full-screen flex justify-center md:items-end">
      <div className="container-init relative">
        <div className="header-white-phone" />
        <div id="smartphone-border">
          <div id="smartphone-container">
            <div id="smartphone-header">
              Seguidores: <span className="followers">{pounts}</span>
              <img src={vect_botones} className="header_icons" />
              <img src={vect_home} className="header_home" />
              <button
                onClick={reload}
                className="casa_reload absolute"
              ></button>
            </div>
            {section === "inicio" && !gameEnd ? (
              <CriterSmartphone />
            ) : (
              <Portada />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContainerPhone;
