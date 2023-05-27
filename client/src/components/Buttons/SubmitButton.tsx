import style from "./submitButton.module.css";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button className={`${style.loginFormBtn} my-3`} type="submit">
      {text}
    </button>
  );
};

export default SubmitButton;
