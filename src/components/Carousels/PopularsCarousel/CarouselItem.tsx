import { PopularItemInterface } from "../../../types/interfaces";
import mapMarker from "../../../data/img/nav/map-marker-alt.svg";
import style from "./carousel.module.css";

interface ItemProps {
  item: PopularItemInterface;
  index: number;
  selectedItem: React.RefObject<HTMLLIElement>;
}

const CarouselItem: React.FC<ItemProps> = ({ item, index, selectedItem }) => {
  const { id, src, alt, name, location, price } = item;
  return (
    <li
      className={style.carouselItem}
      ref={id === index ? selectedItem : null}
    >
      <img className={style.itemImg} src={src} alt={alt} width={246.4} />
      <h3 className={style.itemName}>{name}</h3>
      <a className={style.itemLink} href="#">
        <img className={style.mapMarker} src={mapMarker} alt="map-marker" />
        {location}
      </a>
      <p className={style.itemPrice}>{`$${price}`}</p>
      <button className={style.itemBtn}>Order Now</button>
    </li>
  );
};

export default CarouselItem;
