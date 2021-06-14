import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CriterSmartphone.css";

//result
import { AlertSuccess } from "../result";

//assets
import Diversion from "../../../assets/vectores/CEL_BTN_DIVERSION.svg";
import Descanso from "../../../assets/vectores/CEL_BTN_DESCANSO.svg";
import Atencion from "../../../assets/vectores/CEL_BTN_ATENCION.svg";
import Alegria from "../../../assets/vectores/CEL_BTN_ALEGRIA.svg";
import Enojo from "../../../assets/vectores/CEL_BTN_ENOJO.svg";
import Disgusto from "../../../assets/vectores/CEL_BTN_DISGUSTO.svg";
import Order from "../../../assets/vectores/CEL_BTN_ORDEN.svg";
import Responsabilidad from "../../../assets/vectores/CEL_BTN_RESPONSABILIDAD.svg";

import DiversionSelect from "../../../assets/vectores/CEL_BTN_DIVERSION_RESPUESTA.svg";
import DescansoSelect from "../../../assets/vectores/CEL_BTN_DESCANSO_RESPUESTA.svg";
import AtencionSelect from "../../../assets/vectores/CEL_BTN_ATENCION_RESPUESTA.svg";
import AlegriaSelect from "../../../assets/vectores/CEL_BTN_ALEGRIA_RESPUESTA.svg";
import EnojoSelect from "../../../assets/vectores/CEL_BTN_ENOJO_RESPUESTA.svg";
import DisgustoSelect from "../../../assets/vectores/CEL_BTN_DISGUSTO_RESPUESTA.svg";
import OrderSelect from "../../../assets/vectores/CEL_BTN_ORDEN_RESPUESTA.svg";
import ResponsabilidadSelect from "../../../assets/vectores/CEL_BTN_RESPONSABILIDAD_RESPUESTA.svg";

import DiversionNoSelect from "../../../assets/vectores/CEL_BTN_DIVERSION_AZUL.svg";
import DescansoNoSelect from "../../../assets/vectores/CEL_BTN_DESCANSO_AZUL.svg";
import AtencionNoSelect from "../../../assets/vectores/CEL_BTN_ATENCION_AZUL.svg";
import AlegriaNoSelect from "../../../assets/vectores/CEL_BTN_ALEGRIA_AZUL.svg";
import EnojoNoSelect from "../../../assets/vectores/CEL_BTN_ENOJO_AZUL.svg";
import DisgustoNoSelect from "../../../assets/vectores/CEL_BTN_DISGUSTO_AZUL.svg";
import OrderNoSelect from "../../../assets/vectores/CEL_BTN_ORDEN_AZUL.svg";
import ResponsabilidadNoSelect from "../../../assets/vectores/CEL_BTN_RESPONSABILIDAD_AZUL.svg";

//actions
import { selectedOptionQuestion } from "../../../store/action/questionsAction";

//data
import DataJson from "../../../Data/index.json";

const SecondEsenario = ({ state: { selected }, action: { setSelected } }) => {
  const dispatch = useDispatch();
  const { respQuestion2, etapa, questionActive, subQuestion } = useSelector(
    (state) => state.question
  );

  const respSuccess =
    DataJson[etapa][questionActive][subQuestion]["options"]["correct"];
  const first =
    DataJson[etapa][questionActive][subQuestion]["options"]["first"];
  const second =
    DataJson[etapa][questionActive][subQuestion]["options"]["second"];
  const three =
    DataJson[etapa][questionActive][subQuestion]["options"]["three"];

  const filterImg = (titleImg) => {
    switch (titleImg) {
      case "Alegría":
        return Alegria;
      case "Disgusto":
        return Disgusto;
      case "Enojo":
        return Enojo;
      case "Atención":
        return Atencion;
      case "Diversión":
        return Diversion;
      case "Descanso":
        return Descanso;
      case "Orden":
        return Order;
      case "Responsabilidad":
        return Responsabilidad;
      // case "Compromiso":
      //   return Alegria;
      default:
        return Alegria;
    }
  };

  const filterImgSelected = (titleImg) => {
    switch (titleImg) {
      case "Alegría":
        return AlegriaSelect;
      case "Disgusto":
        return DisgustoSelect;
      case "Enojo":
        return EnojoSelect;
      case "Atención":
        return AtencionSelect;
      case "Diversión":
        return DiversionSelect;
      case "Descanso":
        return DescansoSelect;
      case "Orden":
        return OrderSelect;
      case "Responsabilidad":
        return ResponsabilidadSelect;
      // case "Compromiso":
      //   return "";
      default:
        return AlegriaSelect;
    }
  };
  
  const filterImgAzul = (titleImg) => {
    switch (titleImg) {
      case "Alegría":
        return AlegriaNoSelect;
      case "Disgusto":
        return DisgustoNoSelect;
      case "Enojo":
        return EnojoNoSelect;
      case "Atención":
        return AtencionNoSelect;
      case "Diversión":
        return DiversionNoSelect;
      case "Descanso":
        return DescansoNoSelect;
      case "Orden":
        return OrderNoSelect;
      case "Responsabilidad":
        return ResponsabilidadNoSelect;
      // case "Compromiso":
      //   return "";
      default:
        return AlegriaNoSelect;
    }
  };

  const optionSelected = (opt) => {
    setSelected(opt);
    dispatch(selectedOptionQuestion(opt, "respQuestion2"));
  };
  return (
    <div className="second-container flex justify-between">
      <div className="flex flex-col items-center relative">
        <p className="title-emoji">{first.title}</p>
        <p className="body-emoji">{first.body}</p>
        {selected === "all" ? (
          <button onClick={() => optionSelected("first")}>
            <img src={filterImg(first.title)} className="img-icon" />
          </button>
        ) : selected === "first" ? (
          <>
            <img src={filterImgSelected(first.title)} className="img-icon" />
            {respQuestion2 === respSuccess && respSuccess === "first" ? (
              <AlertSuccess />
            ) : (
              ""
            )}
          </>
        ) : (
          <img src={filterImgAzul(first.title)} className="img-icon" />
        )}
      </div>
      <div className="flex flex-col items-center relative">
        <p className="title-emoji">{second.title}</p>
        <p className="body-emoji">{second.body}</p>
        {selected === "all" ? (
          <button onClick={() => optionSelected("second")}>
            <img src={filterImg(second.title)} className="img-icon" />
          </button>
        ) : selected === "second" ? (
          <>
            <img src={filterImgSelected(second.title)} className="img-icon" />
            {respQuestion2 === respSuccess && respSuccess === "second" ? (
              <AlertSuccess />
            ) : (
              ""
            )}
          </>
        ) : (
          <img src={filterImgAzul(second.title)} className="img-icon" />
        )}
      </div>
      <div className="flex flex-col items-center relative">
        <p className="title-emoji">{three.title}</p>
        <p className="body-emoji">{three.body}</p>
        {selected === "all" ? (
          <button onClick={() => optionSelected("three")}>
            <img src={filterImg(three.title)} className="img-icon" />
          </button>
        ) : selected === "three" ? (
          <>
            <img src={filterImgSelected(three.title)} className="img-icon" />
            {respQuestion2 === respSuccess && respSuccess === "three" ? (
              <AlertSuccess />
            ) : (
              ""
            )}
          </>
        ) : (
          <img src={filterImgAzul(three.title)} className="img-icon" />
        )}
      </div>
    </div>
  );
};

export default SecondEsenario;
