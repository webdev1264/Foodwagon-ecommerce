import React from "react";
import { SearchByInterface } from "../../../types/interfaces";
import style from "./carousel.module.css";

interface CarouselItemProps {
  item: SearchByInterface;
  selectedItem: React.RefObject<HTMLLIElement>;
  index: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  item,
  selectedItem,
  index,
}) => {
  const { id, name, img } = item;
  return (
    <li className={style.carouselItem} ref={id === index ? selectedItem : null}>
      <img className={style.itemImg} src={img} alt={name} />
      <p className={style.itemDescr}>{name}</p>
    </li>
  );
};

export default CarouselItem;
