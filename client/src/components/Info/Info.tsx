import { Container, Row } from "react-bootstrap";
import promoItems from "../../data/foodData/promotions";
import restaurantsFeatures from "../../data/foodData/restaurantsFeatures";
import style from "./info.module.css";
import InfoItem from "./InfoItem";
import FeatureItem from "./FeatureItem";

const Info: React.FC = () => {
  return (
    <section className={style.info}>
      <Container>
        <Row>
          {promoItems.map((item) => (
            <InfoItem key={item.id} item={item} width={314} />
          ))}
        </Row>
        <div className={style.features}>
          <h2 className={style.featuresHeader}>How does it work</h2>
          <div className={style.featuresWrapper}>
            {restaurantsFeatures.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Info;
