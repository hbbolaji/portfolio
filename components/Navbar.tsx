"use client";
import Logo from "../public/fav.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import React, { useState } from "react";

const Heading = (show: boolean, onOpen: () => void, onClose: () => void) => (
  <div className="flex items-center justify-between py-4 md:py-6 px-2 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
    <div className="flex items-center space-x-1 cursor-pointer">
      <h2 className="uppercase text-2xl tracking-widest font-bold text-indigo-500 select-none">
        Hashim
      </h2>
    </div>
    <div className="flex space-x-8 items-center">
      <a href="https://github.com/hbbolaji" target="blank">
        <FaGithub className="text-2xl text-white" />
      </a>
      <a
        href="https://www.linkedin.com/in/hashim-bello-945813112/"
        target="blank"
      >
        <FaLinkedin className="text-2xl text-white" />
      </a>
      {!show ? (
        <HiOutlineMenu
          className="text-4xl cursor-pointer text-white"
          onClick={onOpen}
        />
      ) : (
        <HiOutlineX
          className="text-4xl cursor-pointer text-white"
          onClick={onClose}
        />
      )}
    </div>
  </div>
);

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const onOpen = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };
  return (
    <div className="relative bg-slate-900">
      {Heading(show, onOpen, onClose)}
      {/* Sidebar */}
      {show ? (
        <div className="bg-slate-900 min-h-96 w-full top-0 absolute shadow-xl">
          {Heading(show, onOpen, onClose)}
          <div className="md:py-6  py-4 md:space-x-4 lg:space-x-20 px-2 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-white flex flex-col-reverse md:flex-row">
            <div className="space-y-6 md:block md:w-2/3 xl:w-1/3 p-4">
              <h4 className="text-xl md:text-3xl">Explore What I do</h4>
              <p className="text-sm md:text-base leading-loose text-slate-200">
                I code, test, deploy, and maintain software solutions,
                collaborating closely, continuously learning, and
                problem-solving to meet evolving needs.
              </p>
              <button className="rounded-full px-8 py-2 text-sm bg-indigo-500 font-semibold">
                Resume
              </button>
            </div>
            <div className="w-full flex flex-wrap">
              <div className="w-full sm:w-1/2 p-4">
                <div
                  className="min-h-24 cursor-pointer hover:bg-opacity-30 bg-purple-500 rounded-lg p-4"
                  onClick={onClose}
                >
                  <h4 className="text-xl font-semibold">About me</h4>
                  <p className="text-sm">Get to know more about me</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-4">
                <div
                  className="min-h-24 cursor-pointer hover:bg-opacity-30 bg-blue-500 rounded-lg p-4"
                  onClick={onClose}
                >
                  <h4 className="text-xl font-semibold">Work and Projects</h4>
                  <p className="text-sm">Projects I have been involved in</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-4">
                <div
                  className="min-h-24 cursor-pointer hover:bg-opacity-30 bg-orange-500 rounded-lg p-4"
                  onClick={onClose}
                >
                  <h4 className="text-xl font-semibold">Skills</h4>
                  <p className="text-sm">My Tech stack</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 p-4">
                <div
                  className="min-h-24 cursor-pointer hover:bg-opacity-30 bg-red-500 rounded-lg p-4"
                  onClick={onClose}
                >
                  <h4 className="text-xl font-semibold">Contact me</h4>
                  <p className="text-sm">Don't Hesistate to reach out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
