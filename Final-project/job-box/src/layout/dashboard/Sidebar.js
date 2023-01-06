import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const {
    user: { role },
  } = useSelector((state) => state.auth);

  const employerRoutes = [
    {
      name: "Add Job",
      path: "add-job",
    },
  ];

  const candidateRoutes = [
    {
      name: "Applied jobs",
      path: "applied-jobs",
    },
  ];
  return (
    <div className="sticky top-0 h-screen col-span-2 bg-primary/10">
      <ul className="flex flex-col w-full h-full gap-2 p-3">
        <div className="flex items-center justify-between my-1 text-primary">
          <Link to="/" className="flex items-center">
            <FaChevronLeft />
            <h1>Back</h1>
          </Link>
          <h1 className="text-xl">Dashboard</h1>
        </div>
        {role === "employer" &&
          employerRoutes.map(({ name, path }, index) => (
            <li key={index}>
              <Link
                className="block w-full px-3 py-2 transition-all rounded-full hover:bg-primary hover:text-white bg-primary/10"
                to={path}
              >
                {name}
              </Link>
            </li>
          ))}

        {role === "employee" &&
          candidateRoutes.map(({ name, path }, index) => (
            <li key={index}>
              <Link
                className="block w-full px-3 py-2 transition-all rounded-full hover:bg-primary hover:text-white bg-primary/10"
                to={path}
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
