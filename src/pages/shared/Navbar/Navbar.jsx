import React from "react";
import { Link } from "react-router-dom";
import got from "../../../assets/got.png";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li className="font-semibold text-xl ml-3">
        <Link to="/houses">Houses</Link>
      </li>
      <li className="font-semibold text-xl ml-3">
        <Link to="/persons">Persons</Link>
      </li>
      <li className="font-semibold text-xl ml-3">
        <Link to="/quotes">Quotes</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="mx-auto bg-slate-300">
      <div className="navbar w-4/6 p-0  mx-auto flex justify-between ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="w-1/2 h-24 btn btn-ghost normal-case  font-bold	"
          >
            <img className="w-1/2 h-26" src={got} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-">{menuItems}</ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={1}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
