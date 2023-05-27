import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import style from "./passwordInput.module.css";

interface PasswordInputProps {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  handleOnChange,
  value,
}) => {
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
  return (
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
        onChange={handleOnChange}
        value={value}
      />
      <Form.Text className="text-muted">
        We'll never share your password with anyone else.
      </Form.Text>
      <FontAwesomeIcon
        className={style.passToggler}
        onClick={() => setIsPassVisible(!isPassVisible)}
        icon={isPassVisible ? faEye : faEyeSlash}
      />
    </Form.Group>
  );
};

export default PasswordInput;
