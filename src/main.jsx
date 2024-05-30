import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CountryContext from "./Components/CountryContext.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home.jsx";
import Layout from "./Layout.jsx";
import Data from "./Data.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/:name" element={<Data />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountryContext>
    {/* <App /> */}
    <RouterProvider router={router} />
  </CountryContext>

  // <RouterProvider router={router}/>
);
