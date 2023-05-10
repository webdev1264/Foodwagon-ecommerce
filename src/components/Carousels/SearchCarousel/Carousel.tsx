import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import CarouselItem from "./CarouselItem";
import NavButton from "../../Buttons/NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import searchBy from "../../../data/dishesData/searchBy";
import style from "./carousel.module.css";

const Carousel: React.FC = () => {
  const [index, setIndex] = useState<number>(2);
  const selectedItem = useRef<HTMLLIElement>(null);

  function handleOnNextClick() {
    flushSync(() => {
      if (index < searchBy.length - 3) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(2);
      }
    });
    if (selectedItem.current !== null) {
      handleScroll();
    }
  }

  function handleOnPrevClick() {
    flushSync(() => {
      if (index > 2) {
        setIndex((prev) => prev - 1);
      }
    });
    handleScroll();
  }

  function handleScroll() {
    if (selectedItem.current !== null) {
      selectedItem.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }
  return (
    <>
      <div className={style.carousel}>
        <a className={style.viewAll} href="#">
          View All{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className={style.btnChevronRight}
          />
        </a>
        <NavButton
          disabled={index < 3 ? true : false}
          onClick={handleOnPrevClick}
          direction="left"
          position="topLeft"
        />
        <NavButton
          disabled={false}
          onClick={handleOnNextClick}
          direction="right"
          position="topRight"
        />
        <ul className={style.itemsWrapper}>
          {searchBy.map((item) => {
            return (
              <CarouselItem
                key={item.id}
                item={item}
                index={index}
                selectedItem={selectedItem}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Carousel;
