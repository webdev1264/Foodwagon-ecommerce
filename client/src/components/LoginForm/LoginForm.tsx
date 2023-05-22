import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import style from "./loginForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";

const LoginForm: React.FC = observer(() => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
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
    resetErrors();
  };

  const handleOnClose = () => {
    store.setIsLogin(!store.isLogin);
    resetErrors();
  };

  const handleOnToggle = () => {
    setIsRegistered(!isRegistered);
    setEmail("");
    setPassword("");
    resetErrors();
  };

  const resetErrors = () => {
    store.setRegError("");
    store.setValError("");
  };

  if (store.isRegSuccess) {
    return (
      <div className={style.regSuccessModal}>
        <div className={style.regSuccessWrapper}>
          <FontAwesomeIcon
            className={style.xMark}
            icon={faXmark}
            size="2xl"
            onClick={() => store.setIsRegSuccess(false)}
          />
          <h3 className={style.regSuccessHeader}>
            You've successfully registered!
          </h3>
        </div>
      </div>
    );
  }

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
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
              onChange={handleOnInputChange}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group
            className={`${style.passWrapper} my-3`}
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={isPassVisible ? "text" : "password"}
              name="password"
              minLength={6}
              maxLength={32}
              required
              placeholder="Password"
              onChange={handleOnInputChange}
              value={password}
            />
            <FontAwesomeIcon
              className={style.passToggler}
              onClick={() => setIsPassVisible(!isPassVisible)}
              icon={isPassVisible ? faEye : faEyeSlash}
            />
          </Form.Group>
          {store.valError && isRegistered && (
            <div className={style.regError}>{store.valError}</div>
          )}
          {store.regError && !isRegistered && (
            <div className={style.regError}>{store.regError}</div>
          )}

          <button className={`${style.loginFormBtn} my-3`} type="submit">
            {isRegistered ? "Login" : "Sign up"}
          </button>
          <div>
            {isRegistered ? "Not registered yet? " : "Already registered?"}
            <button
              className={style.authRegBtn}
              onClick={handleOnToggle}
              type="button"
            >
              {isRegistered ? "Sign up" : "Login"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
});

export default LoginForm;
