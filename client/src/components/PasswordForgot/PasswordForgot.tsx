import { Form } from "react-bootstrap";
import style from "./passwordForgot.module.css";
import EmailInput from "../Inputs/EmailInput";
import SubmitButton from "../Buttons/SubmitButton";
import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

const PasswordForgot: React.FC = observer(() => {
  const [email, setEmail] = useState<string>("");
  const { store } = useContext(Context);

  async function handleOnFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await store.restore(email);
  }

  function handleOnInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  return (
    <div className={style.forgotWrapper}>
      <div className={style.formWrapper}>
        <h3 className={style.forgotHeader}>Input your email</h3>
        <Form onSubmit={handleOnFormSubmit}>
          <EmailInput handleOnChange={handleOnInputChange} value={email} />
          {store.respError && (
            <div className={style.error}>{store.respError}</div>
          )}
          <SubmitButton text="Submit" />
        </Form>
      </div>
    </div>
  );
});

export default PasswordForgot;
