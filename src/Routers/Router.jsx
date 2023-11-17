import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllHouses from "../pages/Houses/Houses/AllHouses";
import Persons from "../pages/Persons/Persons/Persons";
import Quotes from "../pages/Quotes/Quotes/Quotes";
import HouseMembers from "../pages/Houses/Houses/HouseMembers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/houses",
        element: <AllHouses></AllHouses>,
      },
      {
        path: "/persons",
        element: <Persons></Persons>,
      },
      {
        path: "/quotes",
        element: <Quotes></Quotes>,
      },
      {
        path: "/houses/:slug",
        loader: ({ params }) =>
          fetch(`https://api.gameofthronesquotes.xyz/v1/house/${params.slug}`),
          element:<HouseMembers></HouseMembers>
      },
    ],
  },
]);
