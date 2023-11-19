import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import AllHouses from "../pages/Houses/AllHouses";
import Persons from "../pages/Persons/Persons";

import HouseMembers from "../pages/Houses/HouseMembers";
import PersonsDetails from "../pages/Persons/PersonsDetails";
import Home from "../pages/Home/Home";
import Quotes from "../pages/Quotes/Quotes";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage>No Data Available</ErrorPage>,
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
        loader: () => fetch("https://api.gameofthronesquotes.xyz/v1/random/5"),
        element: <Quotes></Quotes>,
      },
      {
        path: "/houses/:slug",
        loader: ({ params }) =>
          fetch(`https://api.gameofthronesquotes.xyz/v1/house/${params.slug}`),
        element: <HouseMembers></HouseMembers>,
      },
      {
        path: "/persons/:slug",
        loader: ({ params }) =>
          fetch(
            `https://api.gameofthronesquotes.xyz/v1/character/${params.slug}`
          ),
        element: <PersonsDetails></PersonsDetails>,
      },
      {
        path: "/members/:slug",
        loader: ({ params }) =>
          fetch(
            `https://api.gameofthronesquotes.xyz/v1/character/${params.slug}`
          ),
        element: <PersonsDetails></PersonsDetails>,
      },
    ],
  },
]);
