import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-32">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-base">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li className="text-orange-500 font-bold">
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
