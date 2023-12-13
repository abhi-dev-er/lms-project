import React from "react";
import { useLocation } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useSelector } from "react-redux";

function CourseDescription() {
  const { state } = useLocation();
  
  const { role, data } = useSelector((state) => state.auth);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
        <div className="grid grid-cols-2 gap-10 py-10 relative">
          <div className="space-y-5">
            <img
              className="w-full h-64"
              alt="thumbnail"
              src={state?.thumbnail?.secure_url}
            />

            <div className="space-y-4">
              <div className="flex flex-col items-center justify-between text-xl">
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Total lectures : {state.numberOfLectures}
                  </span>
                </p>
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Instructor : {state.createdBy}
                  </span>
                </p>
              </div>
              {role === "ADMIN" || data?.subscription?.status === "ACTIVE" ? (
                <button className=" w-full bg-blue-800 px-5 py-2 rounded-md font-semibold text-lg cursor-pointer hover:bg-slate-950 transition-all ease-in-out duration-300">
                  Watch lectures
                </button>
              ) : (
                <button className=" w-full bg-blue-800 px-5 py-2 rounded-md font-semibold text-lg cursor-pointer hover:bg-slate-950 transition-all ease-in-out duration-300">
                  Subscribe
                </button>
              )}
            </div>
          </div>

          <div className="space-y-2 text-xl ">
            <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center">
              {state?.title}
            </h1>
            <p className="text-yellow-500">Course description</p>
            <p>{state?.description}</p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseDescription;
