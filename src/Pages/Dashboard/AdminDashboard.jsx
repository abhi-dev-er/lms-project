import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getAllCourses from "../../Redux/Slices/CourseSlice";
import getStatsData from "../../Redux/Slices/StatSlice";
import getPaymentRecord from "../../Redux/Slices/RazorpaySlice";
import deleteCourses from "../../Redux/Slices/CourseSlice";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);
function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allUserCount, subscribedCount } = useSelector((state) => state.stat);

  const { allPayments, finalMonths, monthlySalesRecord } = useSelector(
    (state) => state.razorpay
  );

  const userData = {
    levels: ["Registerd User", "Enrolled User"],
    fontColor: "White",
    datasets: [
      {
        label: "User Details",
        data: [allUserCount, subscribedCount],
        backgroundColor: ["yellow", "green"],
        borderWidth: 1,
        borderColor: ["yellow", "green"],
      },
    ],
  };

  const salseData = {
    levels: [
      "jan",
      "feb",
      "march",
      "apr",
      "may",
      "jun",
      "july",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ],
    fontColor: "White",
    datasets: [
      {
        level: "Sales / month",
        data: monthlySalesRecord,
        backgroundColor: ["rgb(255, 99, 132)"],
        borderColor: ["white"],
        borderWidth: 2,
      },
    ],
  };

  const myCourse = useSelector((state) => state?.course?.courseData);

  async function onCourseDelete(id) {
    if (window.confirm("are you sure you want to delete the course ? ..")) {
      const res = await dispatch(deleteCourses(id));

      if (res?.payload?.success) {
        await dispatch(getAllCourses());
      }
    }
  }
  useEffect(() => {
    (async () => {
      await dispatch(getAllCourses());
      await dispatch(getStatsData());
      await dispatch(getPaymentRecord());
    })();
  }, []);
  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white">
        <h1 className="text-center text-5xl font-semibold text-yellow-500">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-2 gap-5 m-auto mx-10">
          <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
            <div className="w-80 h-80">
              <Pie data={userData} />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Registered Users</p>
                  <h3 className="text-4xl font-bold">{allUserCount}</h3>
                </div>
                <FaUsers className="text-yellow-500 text-5xl" />
              </div>

              <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Subscribed</p>
                  <h3 className="text-4xl font-bold">{subscribedCount}</h3>
                </div>
                <FaUsers className="text-green-500 text-5xl" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10 p-5 shadow-lg">
            <div className="h-80 w-full relative">
              <Bar className="absolute bottom-0 h-80 w-full" data={salseData} />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Subscription count</p>
                  <h3 className="text-4xl font-bold">{allPayments?.count}</h3>
                </div>
                <FcSalesPerformance className="text-yellow-500 text-5xl" />
              </div>

              <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Total revenue</p>
                  <h3 className="text-4xl font-bold">
                    {allPayments?.count * 499}
                  </h3>
                </div>
                <GiMoneyStack className="text-yellow-500 text-5xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-center text-3xl font-semibold">
              Courses Overview
            </h1>
            <button
              onClick={() => {
                navigate("/course/create");
              }}
              className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer"
            >
              Create New Course
            </button>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AdminDashboard;
