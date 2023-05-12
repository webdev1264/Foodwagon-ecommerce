import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import CarouselItem from "./CarouselItem";
import NavButton from "../../Buttons/NavButton";
import style from "./carousel.module.css";
import popularItems from "../../../data/foodData/popular";

const Carousel: React.FC = () => {
  const [index, setIndex] = useState<number>(2);
  const selectedItem = useRef<HTMLLIElement>(null);

  function handleOnNextClick() {
    flushSync(() => {
      if (index < popularItems.length - 3) {
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
        <NavButton
          disabled={index < 3 ? true : false}
          onClick={handleOnPrevClick}
          direction="left"
          position="left"
        />
        <ul className={style.itemsWrapper}>
          {popularItems.map((item) => {
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
        <NavButton
          disabled={false}
          onClick={handleOnNextClick}
          direction="right"
          position="right"
        />
      </div>
    </>
  );
};

export default Carousel;
