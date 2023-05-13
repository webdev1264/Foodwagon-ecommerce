import subSandwich from "../img/details/subSandwich.jpg";
import barbecue from "../img/details/barbecue.jpg";
import pizza from "../img/details/pizza.jpg";
import { DetailsInterface } from "../../types/interfaces";

const details: DetailsInterface[] = [
  {
    id: 0,
    name: "Best deals",
    span: "Crispy Sandwiches",
    descr:
      "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
    img: subSandwich,
    alt: "Sandwich",
  },
  {
    id: 1,
    name: "Celebrate  parties with",
    span: "Fried Chicken",
    descr:
      "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    img: barbecue,
    alt: "Barbecue",
  },
  {
    id: 2,
    name: "Wanna eat hot & spicy",
    span: "Pizza?",
    descr:
      "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
    img: pizza,
    alt: "Pizza",
  },
];

export default details;
