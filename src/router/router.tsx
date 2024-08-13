import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login/Login.tsx";
import ProductDisplay from "../pages/ProductDisplay/ProductDisplay.tsx";
import Precondition from "../pages/Precondition/Precondition.tsx";
import Main from "../pages/Main/Main.tsx";
import App from "../App.tsx";
import Account from "../pages/Account/Account.tsx";
import Cart from "../pages/Cart/Cart.tsx";

const user = {
  address: {
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
    city: "kilcoole",
    street: "new road",
    number: 7682,
    zipcode: "12926-3874",
  },
  id: 1,
  email: "john@gmail.com",
  name: {
    firstname: "john",
    lastname: "doe",
  },
  phone: "1-570-236-7033",
  __v: 0,
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "product/:id",
        element: <ProductDisplay />,
      },
      {
        path: "user",
        element: <Account user={user} />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/precondition",
    element: <Precondition />,
  },
]);
