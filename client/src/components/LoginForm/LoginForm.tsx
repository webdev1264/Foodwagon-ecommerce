import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import style from "./loginForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import EmailInput from "../Inputs/EmailInput";
import PasswordInput from "../Inputs/PasswordInput";
import RegSuccess from "./RegSuccess";
import SubmitButton from "../Buttons/SubmitButton";

const LoginForm: React.FC = observer(() => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistered, setIsRegistered] = useState(true);

  const handleOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegistered) {
      return await store.login(email, password);
    }
    await store.registration(email, password);
  };

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    store.setRespError("");
  };

  const handleOnClose = () => {
    store.setIsLogin(!store.isLogin);
    store.setRespError("");
  };

  const handleOnToggle = () => {
    setIsRegistered(!isRegistered);
    setEmail("");
    setPassword("");
    store.setRespError("");
  };

  return (
    <div className={style.loginFormModal} onClick={handleOnClose}>
      <div
        className={style.loginFormWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          className={style.xMark}
          icon={faXmark}
          size="2xl"
          onClick={handleOnClose}
        />
        <h3 className={style.loginFormHeader}>
          {isRegistered ? "Log in" : "Sign up"} to FoodWagon
        </h3>
        <Form className={style.loginForm} onSubmit={handleOnFormSubmit}>
          <EmailInput handleOnChange={handleOnInputChange} value={email} />
          <PasswordInput
            handleOnChange={handleOnInputChange}
            value={password}
          />
          {store.respError && (
            <div className={style.error}>{store.respError}</div>
          )}
          <SubmitButton text={isRegistered ? "Login" : "Sign up"} />
        </Form>
        <div>
          {isRegistered && (
            <a className={style.forgotBtn} href="/password-forgot">
              Forgot your password?
            </a>
          )}
          {isRegistered ? "Not registered yet? " : "Already registered?"}
          <button
            className={style.authRegBtn}
            onClick={handleOnToggle}
            type="button"
          >
            {isRegistered ? "Sign up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
});

export default LoginForm;
