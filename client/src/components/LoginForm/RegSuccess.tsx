import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./loginForm.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../../main";

const RegSuccess = () => {
  const { store } = useContext(Context);
  return (
    <div
      className={style.regSuccessModal}
      onClick={() => store.setIsSuccess(false)}
    >
      <div
        className={style.regSuccessWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          className={style.xMark}
          icon={faXmark}
          size="2xl"
          onClick={() => store.setIsSuccess(false)}
        />
        <h3 className={style.regSuccessHeader}>
          You've successfully registered!
        </h3>
        <p>Check your email and follow instructions.</p>
      </div>
    </div>
  );
};

export default RegSuccess;
