import React from "react";
import bookMarkLogo from "../Assets/images/logo-bookmark.svg";

const navigationItems = [
  { name: "FEATURES", path: "/" },
  { name: "PRICING", path: "/" },
  { name: "CONTACT", path: "/" },
];

function Navbar() {
  return (
    <nav className="py-8 text-sm flex justify-center " role="navigation">
      <div className="container flex justify-between items-center">
        <img src={bookMarkLogo} alt="bookmark_logo" />
        <ul className="flex gap-10 items-center" role="menubar">
          {navigationItems.map((navItem, index) => (
            <li
              key={index}
              className="hover:text-soft-red transition-all duration-125"
            >
              <a href={navItem.path}>{navItem.name}</a>
            </li>
          ))}
          <li className="cursor-pointer border-2 border-soft-red bg-soft-red text-white rounded-md px-6 py-2 hover:bg-white hover:text-soft-red transition-all duration-125">
            <a href="/">LOGIN</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
