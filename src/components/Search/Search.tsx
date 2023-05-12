import { Container } from "react-bootstrap";
import Carousel from "../Carousels/SearchCarousel/Carousel";
import style from "./search.module.css";

const Search = () => {
  return (
    <section className={style.search}>
      <Container>
        <Carousel />
      </Container>
    </section>
  );
};

export default Search;
