import { useContext } from "react";
import Details from "../components/Details/Details";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import Order from "../components/Order/Order";
import Popular from "../components/Popular/Popular";
import Restaurants from "../components/Restaurants/Restaurants";
import Search from "../components/Search/Search";
import LoginForm from "../components/LoginForm/LoginForm";
import RegSuccess from "../components/LoginForm/RegSuccess";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const Main: React.FC = observer(() => {
  const { store } = useContext(Context);

  return (
    <>
      {store.isLogin && <LoginForm />}
      {store.isSuccess && <RegSuccess />}
      <Header />
      <main>
        <Info />
        <Popular />
        <Restaurants />
        <Search />
        <Features />
        <Details />
        <Order />
      </main>
      <Footer />
    </>
  );
});

export default Main;
