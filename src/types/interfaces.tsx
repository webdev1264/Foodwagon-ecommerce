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

interface RestaurantsFeaturesInterface {
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

interface FeaturesInterface {
  id: number;
  img: string;
  name: string;
}

interface DetailsInterface {
  id: number;
  name: string;
  span: string;
  descr: string;
  img: string;
  alt: string;
  imgPosition?: string;
}

interface FooterInterface {
  name: string;
  url: string;
}

export type {
  PopularItemInterface,
  PromoItemInterface,
  RestaurantsFeaturesInterface,
  RestaurantInterface,
  SearchByInterface,
  FeaturesInterface,
  DetailsInterface,
  FooterInterface,
};
