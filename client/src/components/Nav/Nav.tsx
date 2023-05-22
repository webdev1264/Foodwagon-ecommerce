import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../data/img/nav/Logo.svg";
import mapMarker from "../../data/img/nav/map-marker-alt.svg";
import search from "../../data/img/nav/Search.svg";
import user from "../../data/img/nav/user.svg";
import style from "./nav.module.css";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";

const Nav: React.FC = observer(() => {
  const { store } = useContext(Context);
  return (
    <Container>
      <nav>
        <Row>
          <Col>
            <div className={style.navWrapper}>
              <div className={style.logoWrapper}>
                <a className={style.logoLink} href=".">
                  <img src={logo} alt="logo" width={302} height={36.7} />
                </a>
              </div>
              <div className={style.locationWrapper}>
                <p className={style.locationDescr}>
                  <span className={style.locationDeliver}>Deliver to:</span>
                  <a className={style.locationLink} href="#">
                    <img
                      className={style.mapMarker}
                      src={mapMarker}
                      alt="location"
                      width={14}
                    />
                    <span className={style.locationSubtitle}>
                      Current Location{" "}
                    </span>
                    <span className={style.locationBody}>
                      Mohammadpur Bus Stand, Dhaka
                    </span>
                  </a>
                </p>
              </div>
              <div className={style.searchWrapper}>
                <a className={style.searchLink} href="#">
                  <img
                    className={style.searchImg}
                    src={search}
                    alt="search"
                    width={18}
                  />
                  <span className={style.searchDescr}>Search food</span>
                </a>
                <button
                  className={style.loginBtn}
                  onClick={() => store.setIsLogin(!store.isLogin)}
                >
                  <img
                    className={style.loginImg}
                    src={user}
                    alt="user"
                    width={16}
                  />
                  <span>Login</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </nav>
    </Container>
  );
});

export default Nav;
