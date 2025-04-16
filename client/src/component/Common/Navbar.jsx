import React from "react";

import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import Searchbar from "./Searchbar";
const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <Link to="/ " className="text-2xl font-medium">
            Boyka{" "}
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear{" "}
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear{" "}
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover: text-black">
            <HiOutlineUser className="h-6 w-5 text-gray-700" />
          </Link>

          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />

            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              4
            </span>
          </button>
          {/* Search Bar */}
          <div className="overflow-hidden">
          <Searchbar></Searchbar>
          </div>
       
          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700"></HiBars3BottomRight>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
