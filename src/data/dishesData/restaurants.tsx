import foodWorld from "../../data/img/restaurants/foodWorld.jpg";
import pizzaHub from "../../data/img/restaurants/pizzaHub.jpg";
import donutsHut from "../../data/img/restaurants/donutsHut.jpg";
import subway from "../../data/img/restaurants/subway.jpg";
import rubyTuesday from "../../data/img/restaurants/rubyTuesday.jpg";
import kfc from "../../data/img/restaurants/kfc.jpg";
import redSquare from "../../data/img/restaurants/redSquare.jpg";
import tacoBell from "../../data/img/restaurants/tacoBell.jpg";
import foodWorldLogo from "../../data/img/restaurants/logos/foodWorldLogo.png";
import pizzaHubLogo from "../../data/img/restaurants/logos/pizzaHubLogo.png";
import donutsHutLogo from "../../data/img/restaurants/logos/donutsHutLogo.png";
import subwayLogo from "../../data/img/restaurants/logos/subwayLogo.png";
import rubyTuesdayLogo from "../../data/img/restaurants/logos/rubyTuesdayLogo.png";
import kfcLogo from "../../data/img/restaurants/logos/kfcLogo.png";
import redSquareLogo from "../../data/img/restaurants/logos/redSquareLogo.png";
import tacoBellLogo from "../../data/img/restaurants/logos/tacoBellLogo.png";
import { RestaurantInterface } from "../../types/interfaces";

const restaurants: RestaurantInterface[] = [
  {
    id: 0,
    name: "Foodworld",
    rating: 46,
    promo: 20,
    delivery: "Fast",
    img: foodWorld,
    logo: foodWorldLogo,
    open: "tomorrow",
  },
  {
    id: 1,
    name: "Pizza hub",
    rating: 40,
    promo: 15,
    delivery: "Fast",
    img: pizzaHub,
    logo: pizzaHubLogo,
    open: "tomorrow",
  },
  {
    id: 2,
    name: "Donuts hut",
    rating: 20,
    promo: 10,
    delivery: "Fast",
    img: donutsHut,
    logo: donutsHutLogo,
    open: "Now",
  },
  {
    id: 3,
    name: "Subway",
    rating: 50,
    promo: 15,
    delivery: "Fast",
    img: subway,
    logo: subwayLogo,
    open: "Now",
  },
  {
    id: 4,
    name: "Ruby Tuesday",
    rating: 26,
    promo: 10,
    delivery: "Fast",
    img: rubyTuesday,
    logo: rubyTuesdayLogo,
    open: "Now",
  },
  {
    id: 5,
    name: "Kuakata Fried Chicken",
    rating: 53,
    promo: 25,
    delivery: "Fast",
    img: kfc,
    logo: kfcLogo,
    open: "Now",
  },
  {
    id: 6,
    name: "Red Square",
    rating: 45,
    promo: 10,
    delivery: "Fast",
    img: redSquare,
    logo: redSquareLogo,
    open: "Now",
  },
  {
    id: 7,
    name: "Taco Bell",
    rating: 35,
    promo: 10,
    delivery: "Fast",
    img: tacoBell,
    logo: tacoBellLogo,
    open: "Now",
  },
];

export default restaurants;
