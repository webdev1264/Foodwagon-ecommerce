interface PopularItemInterface {
  id: number;
  src: string;
  alt: string;
  name: string;
  location: string;
  price: string;
}

interface PromoItemInterface {
  id: number;
  name: string;
  src: string;
  alt: string;
  discount: number;
  validity: number;
}

interface FeatureInterface {
  id: number;
  name: string;
  descr: string;
  src: string;
  alt: string;
}

interface RestaurantInterface {
  id: number;
  name: string;
  rating: number;
  promo: number;
  delivery: string;
  img: string;
  logo: string;
  open: string;
}

interface SearchByInterface {
  id: number;
  name: string;
  img: string;
}

export type {
  PopularItemInterface,
  PromoItemInterface,
  FeatureInterface,
  RestaurantInterface,
  SearchByInterface,
};
