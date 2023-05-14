import { Container } from "react-bootstrap";
import { cities, company, contact, legal } from "../../data/foodData/footer";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <h2 className={style.citiesHeader}>Our top cities</h2>
        <div className={style.cities}>
          {cities.map(({ name, url }) => {
            return (
              <div key={name} className={style.city}>
                <a className={style.cityLink} href={url}>
                  {name}
                </a>
              </div>
            );
          })}
        </div>
        <hr className={style.divider} />
      </Container>
    </footer>
  );
};

export default Footer;
