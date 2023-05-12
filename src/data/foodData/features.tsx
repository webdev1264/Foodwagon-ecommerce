import discount from "../img/features/discount.svg"
import tracing from "../img/features/tracing.svg"
import delivery from "../img/features/delivery.svg"
import { FeaturesInterface } from "../../types/interfaces";

const features: FeaturesInterface[] = [
  {
    id: 0,
    img: discount,
    name: "Daily Discounts",
  },
  {
    id: 1,
    img: tracing,
    name: "Live Tracing",
  },
  {
    id: 2,
    img: delivery,
    name: "Quick Delivery",
  },
];

export default features;
