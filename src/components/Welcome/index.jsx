import React from "react";
import { useDispatch } from "react-redux";

//styled
import "./styled.css";

//assets
import RamaLeft from "../../assets/vectores/VECT_RAMA_DER.svg";
import LogoCultivo from "../../assets/logos/CULTIVO.png";
import FooterImg from "../../assets/logos/SPONSORS.png";

//data json
import DataJSON from "../../Data/index.json";

//actions
import { instructionsClose } from "../../store/action/questionsAction";

const Welcome = () => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(instructionsClose());
  };

  return (
    <>
      <div className="card relative py-8">
        <img src={RamaLeft} className="rama-left absolute" />
        <button className="close-btn" onClick={close}>
          {" "}
          &#10005;{" "}
        </button>
        <div className="grid justify-center md:mt-10">
          <img src={LogoCultivo} />
        </div>
        <p className="text-title text-center mt-2">{DataJSON.info.title}</p>
        <div className="flex justify-center card-text">
          <div className="w-body-card">
            <p className="text-subtitle text-left">
              {DataJSON.info["sub-title"]}
            </p>
            <p className="sm:text-subtitle md:text-xl text-justify mt-8 text-roboto-regular">
              {DataJSON.info["body-1"]}
            </p>

            <p className="sm:text-subtitle lg:text-xl text-justify mt-6 text-roboto-regular">
              {DataJSON.info["body-2"]}
            </p>
            <img src={FooterImg} alt="" className="mt-2" />
          </div>
        </div>

        <div className="line-right" />
      </div>
    </>
  );
};
export default Welcome;
