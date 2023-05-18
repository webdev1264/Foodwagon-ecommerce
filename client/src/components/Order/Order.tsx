import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import style from "./order.module.css";

const Order = () => {
  return (
    <section className={style.order}>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <h2 className={style.orderHeader}>
              Are you ready to order with the best deals?
            </h2>
            <button className={style.orderBtn}>
              Proceed to order
              <FontAwesomeIcon
                className={style.btnChevron}
                icon={faChevronRight}
              />
            </button>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Order;
