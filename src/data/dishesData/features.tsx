import location from "../../data/img/info/location.svg";
import order from "../../data/img/info/order.svg";
import payment from "../../data/img/info/payment.svg";
import pleasure from "../../data/img/info/pleasure.svg";
import { FeatureInterface } from "../../types/interfaces";

const features: FeatureInterface[] = [
  {
    id: 0,
    name: "Select location",
    descr: "Choose the location where your food will be delivered.",
    src: location,
    alt: "location",
  },
  {
    id: 1,
    name: "Choose order",
    descr: "Check over hundreds of menus to pick your favorite food.",
    src: order,
    alt: "order",
  },
  {
    id: 2,
    name: "Pay advanced",
    descr: "It's quick, safe, and simple. Select several methods of payment.",
    src: payment,
    alt: "payment",
  },
  {
    id: 3,
    name: "Enjoy meals",
    descr: "Food is made and delivered directly to your home.",
    src: pleasure,
    alt: "pleasure",
  },
];

export default features;
