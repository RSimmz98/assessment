import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 md:flex-row flex-reverse p-4">
      <div>
        <h1 className="text-primaryDark text-center text-3xl font-bold">
          Imagine if <br />
          <span className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-primaryLight to-primaryLighter">
            SNAPCHAT
          </span>{" "}
          <br />
          had events.
        </h1>
        <p className="text-[#4F4F4F] text-center ">
          Easily host and share events with your friends <br /> across any
          social media.
        </p>
      </div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://learn.g2.com/hubfs/action-adults-celebration-433452.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primaryDark ">
            Movie Night
          </h5>
          <p className="text-white text-[#4F4F4F]">👋 Hosted by Elysia</p>
          <div className="flex gap-6 items-center py-3">
            <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
          14 responses•see guests
          </p>
          <a className="bg-primary text-center px-4 py-2 rounded">🤝{" "}Invite</a>
          </div>
          <div className="flex flex-col gap-3 justify-center item-center">
                <div className="flex gap-6 items-center">
                    <span className="bg-white shadow-md p-2">📅</span>
                    <div className="flex flex-col ">
                        <h4 className="font-bold  text-primaryDark">18 August  6:00Pm</h4>
                        <h5 className="">to <span className="font-bold text-[#4F4F4F]">19 August</span> 1:00PM UTC +10</h5>
                     </div>
                </div>
                <div className="flex gap-6 items-center">
                    <span className="bg-white shadow-md p-2">📍</span>
                    <div className="flex flex-col ">
                        <h4 className="font-bold  text-primaryDark">Street Name</h4>
                        <h5 className="">301 Rowes Lane, WA, 7183</h5>
                        
                     </div>
                </div>
                <div className="flex gap-6 items-center">
                    <span className="bg-white p-2 shadow-md">🔗</span>
                    <div className="flex flex-col ">
                        <h4 className="font-bold  text-primaryDark">Link</h4>
                        <h5 className=""> netflix.com</h5>
                     </div>
                </div>
            </div>
             </div>

    
    </div>
    <a
        href="/"
        className="bg-gradient-to-r py-2 px-4 text-center rounded-[10px] text-white w-48 mx-auto from-primaryLight to-primaryLighter"
      >
        🎉 Create my event
      </a>
    </div>
  );
};

export default Home;
