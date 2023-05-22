import React from "react";
import { RestaurantsFeaturesInterface } from "../../types/interfaces";
import style from "./info.module.css";

const FeatureItem: React.FC<RestaurantsFeaturesInterface> = ({
  name,
  descr,
  src,
  alt,
}) => {
  return (
    <div className={style.featuresItem}>
      <img src={src} alt={alt} />
      <h3 className={style.featuresItemName}>{name}</h3>
      <p className={style.featuresItemDescr}>{descr}</p>
    </div>
  );
};

export default FeatureItem;
