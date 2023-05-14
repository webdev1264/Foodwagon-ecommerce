import { Col, Container, Row } from "react-bootstrap";
import { cities, company, contact, legal } from "../../data/foodData/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <h2 className={style.footerHeader}>Our top cities</h2>
        <div className={style.cities}>
          {cities.map(({ name, url }) => {
            return (
              <a
                key={name}
                className={`${style.link} ${style.city}`}
                href={url}
              >
                {name}
              </a>
            );
          })}
        </div>
        <hr className={style.divider} />
        <Row>
          <Col className={style.footerLinks} md={5}>
            <div className={style.companyWrapper}>
              <h2 className={style.footerHeader}>Company</h2>
              {company.map(({ name, url }) => {
                return (
                  <a key={name} className={style.link} href={url}>
                    {name}
                  </a>
                );
              })}
            </div>
            <div className={style.contactWrapper}>
              <h2 className={style.footerHeader}>Contact</h2>
              {contact.map(({ name, url }) => {
                return (
                  <a key={name} className={style.link} href={url}>
                    {name}
                  </a>
                );
              })}
            </div>
            <div className={style.legalWrapper}>
              <h2 className={style.footerHeader}>Legal</h2>
              {legal.map(({ name, url }) => {
                return (
                  <a key={name} className={style.link} href={url}>
                    {name}
                  </a>
                );
              })}
            </div>
          </Col>
          <Col md={3}></Col>
          <Col md={4}>
            <h2 className={style.feedbackHeader}>Follow Us</h2>
            <div className={style.socialWrapper}>
              <a href="#">
                <FontAwesomeIcon className={style.social} icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon className={style.social} icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon className={style.social} icon={faTwitter} />
              </a>
            </div>
            <p className={style.feedbackDescr}>
              Receive exclusive offers in your mailbox
            </p>
            <form className={style.feedbackForm}>
              <FontAwesomeIcon className={style.envelope} icon={faEnvelope} />
              <input
                className={style.feedbackInput}
                type="email"
                placeholder="Enter Your email"
              />
              <button className={style.feedbackBtn}>Subscribe</button>
            </form>
          </Col>
        </Row>
        <hr className={style.divider} />
        <div className={style.copyright}>
          <div>
            All rights Reserved
            <span className={style.copyrightBy}>
              {" "}
              &copy; Your Company, {new Date().getFullYear()}
            </span>
          </div>
          <div>
            Made with <FontAwesomeIcon className={style.heart} icon={faHeart} />{" "}
            <span className={style.madeBy}>by Themewagon</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
