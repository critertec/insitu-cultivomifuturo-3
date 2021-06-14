import React from "react";
import { useSelector } from "react-redux";
import "../CriterSmartphone.css";

//data
import DataJson from "../../../Data/index.json";

export const AlertSuccess = () => {
  const { questionActive, subQuestion } = useSelector(
    (state) => state.question
  );
  const pounts =
    DataJson.question[questionActive][subQuestion]["options"]["pounts"];

  return (
    <div className="absolute punts-success">
      <p className="text-alert-title">+{pounts}</p>
      <p className="text-alert-body">Seguidores</p>
    </div>
  );
};

export const AlertError = () => (
  <div className="absolute punts-error">
    <p className="text-alert-title">-15</p>
    <p className="text-alert-body">Seguidores</p>
  </div>
);
