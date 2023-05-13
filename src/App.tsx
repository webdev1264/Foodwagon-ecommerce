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

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
      minBreakpoint="xs"
    >
      <Nav />
      <Header />
      <main>
        <Info />
        <Popular />
        <Restaurants />
        <Search />
        <Features />
        <Details />
      </main>
    </ThemeProvider>
  );
}

export default App;
