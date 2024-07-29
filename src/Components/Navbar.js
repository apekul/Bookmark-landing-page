import React, { useState } from "react";
import bookMarkLogo from "../Assets/images/logo-bookmark.svg";
import MobileNav from "./MobileNav";

const navigationItems = [
  { name: "FEATURES", path: "/" },
  { name: "PRICING", path: "/" },
  { name: "CONTACT", path: "/" },
];

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className="h-24 text-sm flex justify-center " role="navigation">
      <div className="container hidden md:flex justify-between items-center ">
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
      {/* MobileNav */}
      <div className="container md:hidden flex justify-between items-center">
        {!mobileNav && (
          <>
            <img src={bookMarkLogo} alt="bookmark_logo" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              onClick={() => setMobileNav(true)}
            >
              <path
                fill="#242A45"
                fillRule="evenodd"
                d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
              />
            </svg>
          </>
        )}
      </div>
      {mobileNav && (
        <MobileNav items={navigationItems} setMobileNav={setMobileNav} />
      )}
    </nav>
  );
}

export default Navbar;
