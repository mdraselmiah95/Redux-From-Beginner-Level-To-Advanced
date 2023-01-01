import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const { email } = useSelector((state) => state.auth);

  return (
    <nav
      className={`h-14 fixed w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className="flex items-center h-full gap-3 mx-auto max-w-7xl">
        <li className="flex-auto text-2xl font-semibold">
          <Link to="/">JobBox</Link>
        </li>
        <button className="hover:outline hover:outline-offset-2 hover:outline-1 hover:rounded-md hover:outline-black">
          Button
        </button>
        <li>
          <Link className="transition-all hover:text-primary" to="/jobs">
            Jobs
          </Link>
        </li>

        <li>
          {email ? (
            <button className="transition-all hover:text-primary">
              LogOut
            </button>
          ) : (
            <Link
              className="px-2 py-1 transition-all border border-black rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 "
              to="/login"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
