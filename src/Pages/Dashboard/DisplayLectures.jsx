import React, { useEffect, useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesLecture } from "../../Redux/Slices/LectureSlice";

function DisplayLectures() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { lectures } = useSelector((state) => state.lecture);
  // const {role} = useSelector((state) => state.auth);

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    // if (!state) nevigate("/courses");
    // dispatch(getCoursesLecture(state._id));
  }, []);
  return (
    <HomeLayout>
      <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-10">
        <div className="text-center text-2xl font-semibold text-yellow-500">
          Course Name: {state?.title} abhi
        </div>

        <div className="flex justify-center gap-10 w-full">
          {/*left section for playing videos and displaying courses details to admin*/}
          <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
            <video
              // src={lectures && lectures[currentVideo]?.lecture?.secure_url}
              src="https://www.pexels.com/video/silhouette-of-a-man-sitting-on-the-roof-1966695/"
              className="object-fill rounded-tl-lg rounded-tr-lg w-full"
              controls
              disablePictureInPicture
              muted
              controlsList="nodownload"
            ></video>
            <div>
              <h1>
                <span>
                  
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default DisplayLectures;
