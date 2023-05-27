import { ThemeProvider } from "react-bootstrap";
import React from "react";
import { observer } from "mobx-react-lite";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import loader from "../src/utils/routerLoader/index";
import Root from "./router/root";
import Main from "./router/main";
import "./App.css";
import Forgot from "./router/password-forgot";
import Reset from "./router/password-reset";

const App: React.FC = observer(() => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/main",
          element: <Main />,
        },
        {
          path: "/password-forgot",
          element: <Forgot />,
        },
        {
          path: "/password-reset",
          element: <Reset />,
          loader,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider
      breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
      minBreakpoint="xs"
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
});

export default App;
