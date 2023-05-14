import bowl from "../../data/img/info/bowl.jpg";
import pasta from "../../data/img/info/pasta.jpg";
import salad from "../../data/img/info/salad.jpg";
import soup from "../../data/img/info/soup.jpg";

const promoItems = [
  {
    id: 0,
    name: "Bowl",
    src: bowl,
    alt: "bowl",
    discount: 15,
    validity: 6,
  },
  {
    id: 1,
    name: "Pasta",
    src: pasta,
    alt: "pasta",
    discount: 10,
    validity: 6,
  },
  {
    id: 2,
    name: "Salad",
    src: salad,
    alt: "salad",
    discount: 25,
    validity: 7,
  },
  {
    id: 3,
    name: "Soup",
    src: soup,
    alt: "soup",
    discount: 20,
    validity: 8,
  },
];

export default promoItems;
