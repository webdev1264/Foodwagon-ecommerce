import { Container } from "react-bootstrap";
import style from "./search.module.css";
import Carousel from "../Carousels/SearchCarousel/Carousel";

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
