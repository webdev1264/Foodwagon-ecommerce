import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faClock, faStar } from "@fortawesome/free-solid-svg-icons";
import { RestaurantInterface } from "../../types/interfaces";
import style from "./restaurants.module.css";
import React from "react";

const RestaurantsItem: React.FC<RestaurantInterface> = ({
  name,
  rating,
  promo,
  delivery,
  img,
  logo,
  open,
}) => {
  return (
    <Col md={3} className={style.restaurantWrapper}>
      <div className={style.promoWrapper}>
        <div className={style.promo}>
          <FontAwesomeIcon icon={faTag} />
          {promo}% off
        </div>
        <div className={style.delivery}>
          <FontAwesomeIcon icon={faClock} />
          {delivery}
        </div>
      </div>
      <img
        className={style.restaurantImg}
        src={img}
        alt="dish"
        width={"100%"}
      />
      <div className={style.infoWrapper}>
        <img src={logo} alt="logo" />
        <div>
          <h3 className={style.restaurantName}>{name}</h3>
          <span className={style.rating}>
            <FontAwesomeIcon icon={faStar} /> {rating}
          </span>
        </div>
      </div>
      <div className={open === "Now" ? style.now : style.tomorrow}>
        Open{open === "tomorrow" && "s"} {open}
      </div>
    </Col>
  );
};

export default RestaurantsItem;
