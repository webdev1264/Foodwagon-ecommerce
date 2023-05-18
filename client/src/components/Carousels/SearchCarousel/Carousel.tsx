import { useState, useRef } from "react";
import CarouselItem from "./CarouselItem";
import NavButton from "../../Buttons/NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import searchBy from "../../../data/foodData/searchBy";
import style from "./carousel.module.css";

const Carousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [viewAll, setViewAll] = useState<boolean>(false);
  const selectedItem = useRef<HTMLUListElement>(null);

  function handleOnNextClick() {
    carouselPositioning("right");
  }

  function handleOnPrevClick() {
    carouselPositioning("left");
  }

  function handleOnViewAll() {
    setViewAll((prev) => !prev);
    if (selectedItem.current !== null) {
      selectedItem.current.style.transform = `translateX(0)`;
      setIndex(0);
    }
  }

  function carouselPositioning(direction: string) {
    let newIndex = index;
    direction === "right" ? (newIndex += 6) : (newIndex -= 6);
    if (newIndex > searchBy.length || index < 0) {
      newIndex = 0;
    }
    if (selectedItem.current !== null) {
      selectedItem.current.style.transform = `translateX(-${newIndex * 17.1}%)`;
      setIndex(newIndex);
    }
  }
  return (
    <>
      <div className={style.carousel}>
        <span className={style.viewAll} onClick={handleOnViewAll}>
          {viewAll ? "Collapse" : "View all"}{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className={style.btnChevronRight}
          />
        </span>
        <NavButton
          disabled={index === 0 ? true : false}
          onClick={handleOnPrevClick}
          direction="left"
          position="topLeft"
        />
        <NavButton
          disabled={viewAll}
          onClick={handleOnNextClick}
          direction="right"
          position="topRight"
        />
        <div className={style.itemsContainer}>
          <ul
            className={`${style.itemsWrapper} ${viewAll ? style.fullList : ""}`}
            ref={selectedItem}
          >
            {searchBy.map((item) => {
              return <CarouselItem key={item.id} item={item} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Carousel;
