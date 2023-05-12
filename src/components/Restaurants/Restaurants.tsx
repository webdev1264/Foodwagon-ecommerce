import { Container, Row } from "react-bootstrap";
import RestaurantsItem from "./RestaurantsItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import restaurants from "../../data/foodData/restaurants";
import style from "./restaurants.module.css";

const Restaurants: React.FC = () => {
  return (
    <section className={style.restaurants}>
      <Container>
        <h2 className={style.restaurantsHeader}>Featured Restaurants</h2>
        <Row className={style.restaurantsWrapper}>
          {restaurants.map((restaurant) => (
            <RestaurantsItem key={restaurant.id} {...restaurant} />
          ))}
        </Row>
        <div style={{ width: "100%" }}>
          <button className={style.restaurantsBtn}>
            View All{" "}
            <FontAwesomeIcon
              icon={faChevronRight}
              className={style.chevronRight}
            />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Restaurants;
