import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/inde";
import Portfolio from "../pages/Portfolio";
import ParamsGalery from "../components/ParamsPage";
import ServisePage from "../components/servisPage";
import InterPage from "../pages/InterPage";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio/:id",
        element: <ParamsGalery/>,
      },
      {
        path: "/service",
        element: <ServisePage/>,
      },
      {
        path: "/service/interPage",
        element: <InterPage/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);
