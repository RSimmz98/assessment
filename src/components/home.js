import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center p-10 justify-around flex-row-reverse lg:flex-row lg:flex-col">
      <div className="text-right lg:text-center lg:p-5">
        <h1 className="text-primaryDark md:text-5xl text-6xl tracking-tighter font-bold">
          Imagine if <br />
          <span className="text-center text-6xl md:text-5xl tracking-tighter font-bold text-transparent  bg-clip-text bg-gradient-to-r from-primaryLight to-primaryLighter">
            Snapchat
          </span>
          <br />
          had events.
        </h1>
        <p className="text-[#4F4F4F] mt-3">
          Easily host and share events with your friends <br /> across any
          social media.
        </p>
        <Link to="/eventspage">
   
        <button
        href="/"
        className="bg-gradient-to-r m-5 py-3 px-4 text-center rounded-[10px] text-white w-48 mx-auto from-primaryLight to-primaryLighter lg:hidden"
      >
        🎉 Create my event
      </button>
      </Link>
      </div>
      <div className="lg:mt-5 flex flex-col mt-8 md:w-5/6 space-y-6 overflow-hidden shadow-md bg-slate-50">
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
        />
        <div className="flex flex-col px-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryDark ">
            Movie Night
          </h5>
          <p className="text-gray-500">
            👋 Hosted by <span className="font-bold">Elysia</span>
          </p>
          <div className="flex justify-evenly items-center p-2 bg-white my-4 rounded md:flex-col">
            <p className="font-normal text-primaryDark">
              14 responses <span className="text-primary">• see guests</span>
            </p>
            <a className="bg-primary cursor-pointer text-white text-center px-4 py-2 rounded md:mt-5">
              🤝 Invite
            </a>
          </div>
          <div className="flex flex-col gap-3 justify-center item-center">
            <div className="flex gap-6 items-center mb-3">
              <span className="bg-white shadow-md p-3 rounded">📅</span>
              <div className="flex flex-col ">
                <h4 className="font-bold  text-primaryDark">
                  18 August 6:00Pm
                </h4>
                <h5 className="">
                  to <span className="font-bold text-[#4F4F4F]">19 August</span>{" "}
                  1:00PM UTC +10
                </h5>
              </div>
            </div>
            <div className="flex gap-6 items-center mb-3">
              <span className="bg-white shadow-md p-3 rounded">📍</span>
              <div className="flex flex-col ">
                <h4 className="font-bold  text-primaryDark">Street Name</h4>
                <h5 className="">301 Rowes Lane, WA, 7183</h5>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <span className="bg-white p-3 rounded">🔗</span>
              <div className="flex flex-col ">
                <h4 className="font-bold  text-primaryDark">Link</h4>
                <h5 className="pb-5"> netflix.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        href="/"
        className="bg-gradient-to-r m-5 py-3 px-4 text-center rounded-[10px] text-white w-48 mx-auto from-primaryLight to-primaryLighter hidden lg:block"
      >
        🎉 Create my event
      </button>
    </div>
  );
};

export default Home;