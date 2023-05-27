import { Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import loader from "../../utils/routerLoader";
import url from "url";
import { Context } from "../../main";
import PasswordInput from "../Inputs/PasswordInput";
import SubmitButton from "../Buttons/SubmitButton";
import style from "./passwordReset.module.css";

const ResetPassword: React.FC = () => {
  const { store } = useContext(Context);
  const [password, setPassword] = useState<string>("");
  const { request } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const parsedUrl = url.parse(request.url, true);

  const { resetToken, userId } = parsedUrl.query;

  async function handleOnFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await store.passReset(
      userId as string,
      password as string,
      resetToken as string
    );
  }

  function handleOnInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  return (
    <div className={style.resetWrapper}>
      <div className={style.formWrapper}>
        <h3 className={style.resetHeader}>Input your new password</h3>
        <Form onSubmit={handleOnFormSubmit}>
          <PasswordInput
            handleOnChange={handleOnInputChange}
            value={password}
          />
          <SubmitButton text="Submit" />
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
