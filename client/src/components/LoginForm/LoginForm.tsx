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

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegistered) {
      return await store.login(email, password);
    }
    await store.registration(email, password);
  };

  return (
    <div
      className={style.loginFormModal}
      onClick={() => store.setIsLogin(!store.isLogin)}
    >
      <div
        className={style.loginFormWrapper}
        onClick={(e) => e.stopPropagation()}
      >
        <FontAwesomeIcon
          className={style.xMark}
          icon={faXmark}
          size="2xl"
          onClick={() => store.setIsLogin(!store.isLogin)}
        />
        <h2 className={style.loginFormHeader}>
          {isRegistered ? "Log in" : "Sign up"} to FoodWagon
        </h2>
        <Form className={style.loginForm} onSubmit={(e) => handleOnSubmit(e)}>
          <Form.Group className="my-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {store.isEmailReg && !isRegistered && (
              <span>{`The email ${email} already registered`}</span>
            )}
          </Form.Group>

          <Form.Group
            className={`${style.passWrapper} my-3`}
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={isPassVisible ? "text" : "password"}
              // minLength={6}
              maxLength={32}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FontAwesomeIcon
              className={style.passToggler}
              onClick={() => setIsPassVisible(!isPassVisible)}
              icon={isPassVisible ? faEye : faEyeSlash}
            />
          </Form.Group>
          {isRegistered ? (
            <>
              <button className={`${style.loginFormBtn} my-3`} type="submit">
                Login
              </button>
              <div>
                Not registered yet?{" "}
                <button
                  className={style.authRegBtn}
                  onClick={() => setIsRegistered(!isRegistered)}
                  type="button"
                >
                  Sign up
                </button>
              </div>
            </>
          ) : (
            <>
              <button className={`${style.loginFormBtn} my-3`} type="submit">
                Sign up
              </button>
              <div>
                Already registered?{" "}
                <button
                  className={style.authRegBtn}
                  onClick={() => setIsRegistered(!isRegistered)}
                  type="button"
                >
                  Login
                </button>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
});

export default LoginForm;
