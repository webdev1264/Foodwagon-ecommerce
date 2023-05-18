import { Col } from "react-bootstrap";
import { PromoItemInterface } from "../../types/interfaces";
import style from "./info.module.css";

interface InfoItemProps {
  item: PromoItemInterface;
  width: number;
}

const InfoItem: React.FC<InfoItemProps> = ({ item, width }) => {
  const { name, src, alt, discount, validity } = item;
  return (
    <Col md={3}>
      <div className={style.promoItemWrapper}>
        <div className={style.promoItem}>
          <img
            className={style.promoImg}
            src={src}
            alt={alt}
            width={width}
          ></img>
          <div className={style.discount}>
            <div className={style.discountValue}>{discount}</div>
            <div className={style.discountDescr}>
              % <br />
              <span>Off</span>
            </div>
          </div>
        </div>
        <h3 className={style.discountItemName}>{name}</h3>
        <p className={style.discountItemDescr}>{validity} Days Remaining</p>
      </div>
    </Col>
  );
};

export default InfoItem;
