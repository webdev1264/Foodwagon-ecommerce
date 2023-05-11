import React from "react";
import { SearchByInterface } from "../../../types/interfaces";
import style from "./carousel.module.css";

interface CarouselItemProps {
  item: SearchByInterface;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  const { name, img } = item;
  return (
    <li className={style.carouselItem}>
      <img className={style.itemImg} src={img} alt={name} />
      <p className={style.itemDescr}>{name}</p>
    </li>
  );
};

export default CarouselItem;
