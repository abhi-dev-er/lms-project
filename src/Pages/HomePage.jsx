import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import HomePageImage from "../assets/images/homePageMainImage.png";

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            find out best
            <span className="text-yellow-500 font-bold">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            We Have a Large Library of Courses taught by highly skilled and
            Qulified faculties at a very affordable cost
          </p>
          <div className="space-x-6">
            <Link to="/courses">
              <button className="bg-blue-600 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-slate-950 transition-all ease-in-out duration-300">
                Explore Courses
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-blue-800 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-slate-950 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img alt="Homepage Image" src={HomePageImage} />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
