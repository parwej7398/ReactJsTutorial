import Amazon from "../Amazon";
import Map2 from "../Map2";
import Blog from "../Pages/Blog";
import Products from "../Products";
import ProductDetail from "../Products/ProductDetail";
import PropsDrilling from "../PropDrilling";
import Props from "../Props";
import Props2 from "../Props2";
import UseContextDemo from "../UseContext";
import UseEffct from "../UseEffect";
import UseRefDemo from "../UseRefDemo";
import DemoArray from "../demomap";
import Products2 from "../Products2";
import Layout from "../Layout";
import UseReducerDemo from "../UseReducer";
import Calculator from "../Calculator";
import SpreadOperator from "../SpreadOperator";


export const routes = [
  {
    id: 1,
    path: "/",
    element: <Blog />,
  },

  {
    id: 1,
    path: "/map2",
    element: <Map2 />,
  },

  {
    id: 1,
    path: "/amazon",
    element: <Amazon />,
  },

  {
    id: 1,
    path: "/demomap",
    element: <DemoArray />,
  },

  {
    id: 1,
    path: "/useeffect",
    element: <UseEffct />,
  },

  {
    id: 1,
    path: "/useref",
    element: <UseRefDemo />,
  },

  {
    id: 1,
    path: "/props",
    element: <Props />,
  },

  {
    id: 1,
    path: "/props2",
    element: <Props2 />,
  },

  {
    id: 1,
    path: "/products",
    element: <Products />,
  },

  {
    id: 1,
    path: "/products2",
    element: <Products2 />,
  },

  {
    id: 1,
    path: "/use-context",
    element: <UseContextDemo />,
  },

  {
    id: 2,
    path: "/products",
    element: <Layout children={<Products />} />,
  },

  {
    id: 1,
    path: "/prop-drilling",
    element: <PropsDrilling />,
  },
  {
    id: 2,
    path: "/blog",
    element: <Blog />,
  },
  {
    id: 2,
    path: "/products",
    element: <Products />,
  },
  {
    id: 2,
    path: "/product/:id/:name",
    element: <ProductDetail />,
  },
  {
    id: 2,
    path: "use-reducer",
    element: <UseReducerDemo />,
  },
  {
    id: 2,
    path: "calculator",
    element: <Calculator />,
  },
  {
    id: 2,
    path: "operator",
    element: <SpreadOperator />,
  },
];




