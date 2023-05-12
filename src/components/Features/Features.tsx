import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import features from "../../data/foodData/features";
import download from "../../data/img/features/download.png";
import googlePlay from "../../data/img/features/googlePlay.svg";
import appleStore from "../../data/img/features/appleStore.svg";
import style from "./features.module.css";

const Features = () => {
  return (
    <section className={style.featuresWrapper}>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <div className={style.features}>
              {features.map((feature) => {
                const { id, img, name } = feature;
                return (
                  <Fragment key={id}>
                    <div className={style.feature}>
                      <img className={style.featureImg} src={img} alt={name} />
                      <h3 className={style.featureName}>{name}</h3>
                    </div>
                    <div className={style.verticalRule}></div>
                  </Fragment>
                );
              })}
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row className={style.download}>
          <Col md={1}></Col>
          <Col md={5}>
            <img src={download} alt="Download" width={"100%"} />
          </Col>
          <Col md={1}></Col>
          <Col md={4}>
            <div>
              <h2 className={style.downloadName}>Install the app</h2>
              <p className={style.downloadDescr}>
                It's never been easier to order food. Look for the finest
                discounts and you'll be lost in a world of delectable food.
              </p>
              <div className={style.links}>
                <a href="#">
                  <img src={googlePlay} alt="Google play" />
                </a>
                <a href="#">
                  <img src={appleStore} alt="Apple store" />
                </a>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
