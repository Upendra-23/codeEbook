import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn, DropdownLoggedOut } from "../index";
import Logo from "../../assets/logo.png";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const { cartList } = useCart();

  const token = JSON.parse(sessionStorage.getItem("token"));

  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [show, setShow] = useState(false);
  const [dropDown, setDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-3" alt="Codebook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="bi bi-gear-wide-connected  cursor-pointer text-gray-700 dark:text-white text-xl mr-5"
            ></span>
            <span
              onClick={() => setShow(!show)}
              className="bi bi-search  cursor-pointer text-gray-700 dark:text-white text-xl mr-5"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropDown)}
              className="bi bi-person-circle relative cursor-pointer  text-gray-700 dark:text-white text-xl mr-5"
            >
              {dropDown &&
                (token ? (
                  <DropdownLoggedIn setDropdown={setDropdown} />
                ) : (
                  <DropdownLoggedOut setDropdown={setDropdown} />
                ))}
            </span>
          </div>
        </div>
      </nav>
      {show && <Search setShow={setShow} />}
    </header>
  );
};
