import { ThemeProvider } from "react-bootstrap";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
      minBreakpoint="xs"
    >
      <Nav />
      <Header />
    </ThemeProvider>
  );
}

export default App;
