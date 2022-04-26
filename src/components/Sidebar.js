/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/Logo.png";
import "./AppIn.css";

export default function Sidebar() {
  console.log(Logo);

  const [isOpen, setIsOpen] = useState(false);

  // const [isOpen2, setIsOpen2] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  // var main = document.getElementById("#MainSect");
  const changeTextColor = () => {
    if (window.scrollY >= 700) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeTextColor);
  // const Opened = () => {
  //     if (window.scrollY >= 600){
  //         setIsOpen2(true);
  //         setIsOpen(false);
  //     }else{
  //         setIsOpen2(false);
  //         setIsOpen(false);
  //     }
  // };
  // window.addEventListener('scroll', Opened);
  return (
    <>
      <div>
        <header
          className={`inset-x-0 duration-200 py-4 px-10 fixed top-0 flex items-center justify-between shadow-md mb-10 ${
            colorChange ? "text-black bg-white" : "text-white"
          }`}
        >
          <a href="#HomeSect">
            <h1 className="font-Rubik text-2xl py-2 transform">Adham</h1>
          </a>
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-6 py-2 font-bold text-base rounded-md hover:shadow-md transform"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          ) : (
            <button
              className="text-black hover:text-gray-400 transform duration-200 fixed top-4 right-4 text-xl z-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          <aside
            className={`inset-y-0 -right-1 fixed bg-white shadow-xl shadow-gray-400 p-14 w-72 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } duration-300 ease-in-out`}
          >
            <a href="#" onClick={() => setIsOpen(!isOpen)}>
              <h3 className={`text-xl text-pink-400 transform duration-200`}>
                Home
              </h3>
            </a>
            <a href="#AboutSect" onClick={() => setIsOpen(!isOpen)}>
              <h3
                className={`text-xl hover:text-pink-400 mt-5 transform duration-200 text-black`}
              >
                About
              </h3>
            </a>
            <a href="#WorksSect" onClick={() => setIsOpen(!isOpen)}>
              <h3
                className={`text-xl hover:text-pink-400 mt-5 transform duration-200 text-black`}
              >
                My Works
              </h3>
            </a>
            <a href="#ContactSect" onClick={() => setIsOpen(!isOpen)}>
              <h3
                className={`text-xl hover:text-pink-400 mt-5 transform duration-200 text-black`}
              >
                Contact me
              </h3>
            </a>
          </aside>
        </header>
      </div>
    </>
  );
}
