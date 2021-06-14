import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "./CriterSmartphone.css";

//esenarios
import FirstEsenario from "./esenarios/FirstEsenario";
import SecondEsenario from "./esenarios/SecondEsenario";

//data
import DataJson from "../../Data/index.json";

function CriterSmartphone({}) {
  // const [showDialog, setShowDialog] = useState(false);
  const { questionActive, subQuestion, etapa } = useSelector(
    (state) => state.question
  );
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    if (subQuestion === "a") {
      setSelected("all");
    }
  }, [subQuestion]);

  const titleQuestion = DataJson[etapa][questionActive][subQuestion]["header"];
  const bodyQuestion = DataJson[etapa][questionActive][subQuestion]["body"];
  const nameInfoPerson = DataJson[etapa][questionActive]["person"];
  const fullNameSplit = nameInfoPerson.split(" ");
  const initialFullName = fullNameSplit[0][0] + fullNameSplit[1][0];
  const retroalimentacion =
    selected != "all"
      ? DataJson[etapa][questionActive][subQuestion]["options"][selected][
          "retroalimentacion"
        ]
      : { title: "", body: "" };

  const dateNow = moment().format("MMMM Do YYYY, h:mm:ss a");
  moment.locale("es");
  return (
    <>
      <div id="smartphone-content">
        <div id="escenario">
          <div id="contact_card">
            <div id="contact_icon">{initialFullName}</div>
            <div id="contact_info">
              <h2>{nameInfoPerson}</h2>
              {dateNow}
            </div>
          </div>
          <div id="escenario_message">
            <h1 className="text-title-dialog-white">{titleQuestion}</h1>
            <p className="text-body-dialog-white">{bodyQuestion}</p>
          </div>
          {subQuestion === "a" && <FirstEsenario />}
          {subQuestion === "b" && (
            <div className="flex justify-center bg-crem">
              <SecondEsenario state={{ selected }} action={{ setSelected }} />
            </div>
          )}
          {retroalimentacion.body && (
            <div className="flex items-center container-btn-contact">
              <div
                className="btn-contact-icon text-center"
                // onClick={() => setShowDialog(!showDialog)}
              >
                {initialFullName}
              </div>

              {/* {showDialog && ( */}
              <>
                <div className="triangle-left"></div>
                <div className="dialog-contianer-btn">
                  <p className="text-title-dialog">{retroalimentacion.title}</p>

                  <p className="text-body-dialog">{retroalimentacion.body}</p>
                </div>
              </>
              {/* )} */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CriterSmartphone;
