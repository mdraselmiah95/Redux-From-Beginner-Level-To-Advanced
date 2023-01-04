import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const { pathname } = useLocation();
  const {
    user: { email, role },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };

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

        <li>
          <Link className="transition-all hover:text-primary" to="/jobs">
            Jobs
          </Link>
        </li>

        <li>
          {email ? (
            <button
              onClick={handleSignOut}
              className=" hover:outline hover:outline-offset-2 hover:outline-1 hover:rounded-md hover:outline-black"
            >
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
        {email && role && (
          <li>
            <Link
              className="px-2 py-1 transition-all border border-black rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 "
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
        )}
        {email && !role && (
          <li>
            <Link
              className="px-2 py-1 transition-all border border-black rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 "
              to="/register"
            >
              Get Started
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
