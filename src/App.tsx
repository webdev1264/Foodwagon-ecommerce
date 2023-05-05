import { ThemeProvider } from "react-bootstrap";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import "./App.css";
import Info from "./components/Info/Info";
import Popular from "./components/Popular/Popular";

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
      </main>
    </ThemeProvider>
  );
}

export default App;
