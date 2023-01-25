import {
  ABOUT,
  BLOG,
  CART,
  CONTACTS,
  FAVORITES,
  HOME,
  LOGIN,
  NOT_FOUND,
  PRODUCTS,
  PROFILE,
  SIGN_UP,
} from "./constants";
import React from "react";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Products from "./components/Products";

export const publicRoutes = [
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: PRODUCTS,
    element: <Products />,
  },
  // {
  //   path: ABOUT,
  //   element: About,
  // },
  // {
  //   path: BLOG,
  //   element: Blog,
  // },
  // {
  //   path: CONTACTS,
  //   element: Contacts,
  // },
  // {
  //   path: CART,
  //   element: Cart,
  // },
  // {
  //   path: LOGIN,
  //   element: Login,
  // },
  // {
  //   path: SIGN_UP,
  //   element: SignUp,
  // },
  {
    path: NOT_FOUND,
    element: <NotFound />,
  },
];

export const privateRoutes = [
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: FAVORITES,
    element: <Favorites />,
  },
  {
    path: NOT_FOUND,
    element: <NotFound />,
  },
  // {
  //   path: PROFILE,
  //   element: Profile,
  // },
];
