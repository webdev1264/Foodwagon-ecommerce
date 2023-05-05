import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import itemsList from "../../data/dishes/items";
import style from "./carousel.module.css";

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(2);
  const selectedItem = useRef<HTMLLIElement>(null);

  function handleOnNextClick() {
    flushSync(() => {
      if (index < itemsList.length - 2) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(2);
      }
    });
    if (selectedItem.current !== null) {
      selectedItem.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  function handleOnPrevClick() {
    flushSync(() => {
      if (index > 2) {
        setIndex((prev) => prev - 1);
      }
    });
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
        <nav>
          <button className={style.prevBtn} onClick={handleOnPrevClick}>
            Prev
          </button>
        </nav>
        <ul className={style.itemsWrapper}>
          {itemsList.map((item) => {
            const { id, src, alt, name, location, price } = item;
            return (
              <li
                key={id}
                className={style.carouselItem}
                ref={id === index ? selectedItem : null}
              >
                <img src={src} alt={alt} width={247} />
                <h3>{name}</h3>
                <a href="#">{location}</a>
                <p>{`$${price}`}</p>
                <button onClick={handleOnNextClick}>Order Now</button>
              </li>
            );
          })}
        </ul>
        <nav>
          <button className={style.nextBtn} onClick={handleOnNextClick}>
            Next
          </button>
        </nav>
      </div>
    </>
  );
};

export default Carousel;
