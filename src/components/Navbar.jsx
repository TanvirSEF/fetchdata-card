import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="">
      <nav>
        <ul className="flex justify-center items-center p-4">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
