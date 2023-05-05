import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ramen from "../../data/img/header/ramen.png";
import bike from "../../data/img/header/bike.svg";
import bag from "../../data/img/header/bag.svg";
import mapMarker from "../../data/img/header/map-marker.svg";
import search from "../../data/img/header/search.svg";
import style from "./header.module.css";
import { Container } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <header className={style.headerWrapper}>
      <Container className={style.container}>
        <Row>
          <Col md={8}>
            <h1 className={style.heading}>Are you starving?</h1>
            <p className={style.descr}>
              Within a few clicks, find meals that are accessible near you
            </p>
            <form className={style.orderCard}>
              <div className={style.btnWrapper}>
                <button className={style.deliveryBtn}>
                  <img className={style.bikeImg} src={bike} alt="bike" />
                  <span>Delivery</span>
                </button>
                <button className={style.pickupBtn}>
                  <img src={bag} alt="bag" />
                  <span>Pickup</span>
                </button>
              </div>
              <div className={style.searchWrapper}>
                <div className={style.inputWrapper}>
                  <img
                    className={style.mapImg}
                    src={mapMarker}
                    alt="map-marker"
                  />
                  <input
                    className={style.headerInput}
                    placeholder="Enter Your Address"
                    type="text"
                  />
                </div>
                <button className={style.findBtn}>
                  <img className={style.findImg} src={search} alt="search" />
                  <span>Find Food</span>
                </button>
              </div>
            </form>
          </Col>
          <Col md={4}>
            <div className={style.ramenWrapper}>
              <img
                className={style.ramenImg}
                src={ramen}
                alt="ramen"
                width={"100%"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
