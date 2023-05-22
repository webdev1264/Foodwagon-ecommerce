import { ThemeProvider } from "react-bootstrap";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import "./App.css";
import Info from "./components/Info/Info";
import Popular from "./components/Popular/Popular";
import Restaurants from "./components/Restaurants/Restaurants";
import Search from "./components/Search/Search";
import Features from "./components/Features/Features";
import Details from "./components/Details/Details";
import Order from "./components/Order/Order";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/LoginForm/LoginForm";
import React, { useContext } from "react";
import { Context } from "./main";
import { observer } from "mobx-react-lite";

const App: React.FC = observer(() => {
  const { store } = useContext(Context);

  return (
    <ThemeProvider
      breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
      minBreakpoint="xs"
    >
      {store.isLogin && <LoginForm />}
      <Nav />
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
    </ThemeProvider>
  );
});

export default App;
