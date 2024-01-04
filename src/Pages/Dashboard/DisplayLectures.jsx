import React, { useEffect, useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCoursesLecture,
  getCoursesLecture,
} from "../../Redux/Slices/LectureSlice";

function DisplayLectures() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { lectures } = useSelector((state) => state.lecture);
  const { role } = useSelector((state) => state.auth);

  const [currentVideo, setCurrentVideo] = useState(0);

  async function onlectureDelete(courseId, lectureId) {
    await dispatch(
      deleteCoursesLecture({ courseId: courseId, lectureId: lectureId })
    );
    await dispatch(getCoursesLecture(courseId));
  }

  useEffect(() => {
    if (!state) nevigate("/courses");
    dispatch(getCoursesLecture(state._id));
  }, []);
  return (
    <HomeLayout>
      <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-10">
        <div className="text-center text-2xl font-semibold text-yellow-500">
          Course Name: {state?.title}
        </div>

        {lectures && {lectures.length > 0} && <div className="flex justify-center gap-10 w-full">
          {/*left section for playing videos and displaying courses details to admin*/}
          <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
            <video
              src={lectures && lectures[currentVideo]?.lecture?.secure_url}
              className="object-fill rounded-tl-lg rounded-tr-lg w-full"
              controls
              disablePictureInPicture
              muted
              controlsList="nodownload"
            ></video>
            <div>
              <h1>
                <span className="text-yellow-500"> Title: </span>

                {lectures && lectures[currentVideo]?.title}
              </h1>
              <p>
                <span className="text-yellow-500 line-clamp-4">
                  Description:{" "}
                </span>
                {lectures && lectures[currentVideo]?.description}
              </p>
            </div>
          </div>

          {/* { right section for displaying list of lecture} */}

          <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
            <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between ">
              <p>lectures list</p>
              {role === "ADMIN" && (
                <button onClick={()=> nevigate("/course/addlecture", {state: {...state}})} className="btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                  Add New Lecture
                </button>
              )}
            </li>
          </ul>
          {lectures &&
            lectures.map((lecture, index) => {
              return (
                <li className="space-y-2" key={lecture._id}>
                  <p
                    className="cursor-pointer"
                    onClick={() => setCurrentVideo(index)}
                  >
                    <span> lecture {index + 1} : </span>
                    {lecture?.title}
                  </p>
                  {role === "ADMIN" && (
                    <button
                      onClick={() => onlectureDelete(state?._id, lecture?._id)}
                      className="btn-accent  px-2 py-1 rounded-md font-semibold text-sm"
                    >
                      Add New Lecture
                    </button>
                  )}
                </li>
              );
            })}
        </div>}
      </div>
    </HomeLayout>
  );
}

export default DisplayLectures;
