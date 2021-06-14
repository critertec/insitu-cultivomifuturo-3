import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//styled
import "./inicio.css";

//Components
import Welcome from "../components/Welcome";
import ContainerPhone from "../components/ContainerPhone";
import CriterFooter from "../components/CriterFooter/CriterFooter";

//actions
import { initGame } from "../store/action/questionsAction";

function CriterInsitu1() {
  const dispatch = useDispatch();
  const { instructions } = useSelector((state) => state.question);

  const [showOptionQuestion, setshowOptionQuestion] = useState("1");

  // const showNewQuestion = () => {
  //   const optionDialog = animationDialogYeiner.yeiner;

  //   if (optionDialog === "dialog-3") {
  //     setTimeOutSeccion50(() => {
  //       setAnimationDialogYeiner({
  //         speakYeiner: "yeiner_welcome",
  //         dialogYeiner: false,
  //       });
  //       setAnimationDialogLuisa({
  //         ...animationDialogLuisa,
  //         speakLuisa: "luisa_speak",
  //         dialogLuisa: "dialog-4",
  //       });
  //       setshowOptionQuestion("2");
  //     });
  //     setTimeOutSeccion1(dialogLuisawelcome);
  //   }
  // };

  // const setTimeOutSeccion50 = (fun) => {
  //   setTimeout(() => {
  //     fun();
  //   }, 500);
  // };

  return (
    <div className="md:flex flex-row justify-center items-end">
      {instructions ? (
        <Welcome />
      ) : (
        <div className="relative full-w">
          <div id="footer_welcome" className="bg_footer"></div>
          <ContainerPhone />
          <CriterFooter />
        </div>
      )}
    </div>
  );
}

export default CriterInsitu1;
