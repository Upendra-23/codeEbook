import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            CodeBook
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <Link
            to="https://www.instagram.com/upendra_007_/?igshid=ZGUzMzM3NWJiOQ%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="bi bi-instagram mr-5"
          ></Link>
          <Link to="/" className="bi bi-twitter mr-5"></Link>
          <Link
            to="https://github.com/Upendra-23"
            target="_blank"
            rel="noreferrer"
            className="bi bi-github"
          ></Link>
        </div>
      </div>
    </footer>
  );
};
