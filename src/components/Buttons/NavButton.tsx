import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import style from "./navButton.module.css";

interface NavButtonProps {
  disabled: boolean;
  onClick: () => void;
  direction: string;
  position: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  disabled = false,
  onClick,
  direction,
  position,
}) => {
  return (
    <nav className={`${style.btnWrapper} ${style[position]}`}>
      <button
        disabled={disabled}
        className={`${style.navBtn} ${disabled ? style.disabled : ""}`}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={direction === "right" ? faChevronRight : faChevronLeft}
          size="2xl"
          className={style.chevron}
        />
      </button>
    </nav>
  );
};

export default NavButton;
