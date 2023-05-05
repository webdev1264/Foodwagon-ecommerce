import { Container } from "react-bootstrap";
import Carousel from "../Carousel/Carousel";
import style from "./popular.module.css";

const Popular: React.FC = () => {
  return (
    <section className={style.popular}>
      <Container className={style.container}>
        <h2 className={style.popularHeader}>Popular items</h2>
        <Carousel />
      </Container>
    </section>
  );
};

export default Popular;
