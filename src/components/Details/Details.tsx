import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import details from "../../data/foodData/details";
import style from "./details.module.css";

const Details = () => {
  return (
    <section className={style.details}>
      <Container>
        {details.map((detail) => {
          const { id, name, span, descr, img, alt } = detail;
          return (
            <div key={id} className={style.detailWrapper}>
              <div className={style.descrWrapper}>
                <h2 className={style.detailName}>
                  {name} <span className={style.nameSpan}>{span}</span>
                </h2>
                <p className={style.detailDescr}>{descr}</p>
                <button className={style.detailBtn}>
                  Proceed to order <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div>
                <img className={style.detailImg} src={img} alt={alt} />
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Details;
