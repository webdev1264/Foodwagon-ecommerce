import { Col, Container, Row } from "react-bootstrap";
import bowl from "../../data/img/info/bowl.jpg";
import pasta from "../../data/img/info/pasta.jpg";
import salad from "../../data/img/info/salad.jpg";
import soup from "../../data/img/info/soup.jpg";
import location from "../../data/img/info/location.svg";
import order from "../../data/img/info/order.svg";
import payment from "../../data/img/info/payment.svg";
import pleasure from "../../data/img/info/pleasure.svg";
import style from "./info.module.css";

const Info: React.FC = () => {
  return (
    <section className={style.info}>
      <Container>
        <Row>
          <Col md={3}>
            <div className={style.promoItemWrapper}>
              <div className={style.promoItem}>
                <img
                  className={style.promoImg}
                  src={bowl}
                  alt="bowl"
                  width={314}
                ></img>
                <div className={style.discount}>
                  <div className={style.discountValue}>15</div>
                  <div className={style.discountDescr}>
                    % <br />
                    <span>Off</span>
                  </div>
                </div>
              </div>
              <h3 className={style.discountItemName}>Bowl</h3>
              <p className={style.discountItemDescr}>6 Days Remaining</p>
            </div>
          </Col>
          <Col md={3}>
            <div className={style.promoItemWrapper}>
              <div className={style.promoItem}>
                <img
                  className={style.promoImg}
                  src={pasta}
                  alt="pasta"
                  width={314}
                ></img>
                <div className={style.discount}>
                  <div className={style.discountValue}>10</div>
                  <div className={style.discountDescr}>
                    % <br />
                    <span>Off</span>
                  </div>
                </div>
              </div>
              <h3 className={style.discountItemName}>Pasta</h3>
              <p className={style.discountItemDescr}>6 Days Remaining</p>
            </div>
          </Col>
          <Col md={3}>
            <div className={style.promoItemWrapper}>
              <div className={style.promoItem}>
                <img
                  className={style.promoImg}
                  src={salad}
                  alt="salad"
                  width={314}
                ></img>
                <div className={style.discount}>
                  <div className={style.discountValue}>25</div>
                  <div className={style.discountDescr}>
                    % <br />
                    <span>Off</span>
                  </div>
                </div>
              </div>
              <h3 className={style.discountItemName}>Salad</h3>
              <p className={style.discountItemDescr}>7 Days Remaining</p>
            </div>
          </Col>
          <Col md={3}>
            <div className={style.promoItemWrapper}>
              <div className={style.promoItem}>
                <img
                  className={style.promoImg}
                  src={soup}
                  alt="soup"
                  width={314}
                ></img>
                <div className={style.discount}>
                  <div className={style.discountValue}>20</div>
                  <div className={style.discountDescr}>
                    % <br />
                    <span>Off</span>
                  </div>
                </div>
              </div>
              <h3 className={style.discountItemName}>Soup</h3>
              <p className={style.discountItemDescr}>8 Days Remaining</p>
            </div>
          </Col>
        </Row>
        <div className={style.features}>
          <h2 className={style.featuresHeader}>How does it work</h2>
          <div className={style.featuresWrapper}>
            <div className={style.featuresItem}>
              <img src={location} alt="location" />
              <h3 className={style.featuresItemName}>Select location</h3>
              <p className={style.featuresItemDescr}>
                Choose the location where your food will be delivered.
              </p>
            </div>
            <div className={style.featuresItem}>
              <img src={order} alt="order" />
              <h3 className={style.featuresItemName}>Choose order</h3>
              <p className={style.featuresItemDescr}>
                Check over hundreds of menus to pick your favorite food
              </p>
            </div>
            <div className={style.featuresItem}>
              <img src={payment} alt="payment" />
              <h3 className={style.featuresItemName}>Pay advanced</h3>
              <p className={style.featuresItemDescr}>
                It's quick, safe, and simple. Select several methods of payment
              </p>
            </div>
            <div className={style.featuresItem}>
              <img src={pleasure} alt="pleasure" />
              <h3 className={style.featuresItemName}>Enjoy meals</h3>
              <p className={style.featuresItemDescr}>
                Food is made and delivered directly to your home.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Info;
