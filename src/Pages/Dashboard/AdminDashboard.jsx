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
import HomeLayout from "../../Layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getAllCourses from "../../Redux/Slices/CourseSlice";
import getStatsData from "../../Redux/Slices/StatSlice";
import getPaymentRecord from "../../Redux/Slices/RazorpaySlice";
import deleteCourses from "../../Redux/Slices/CourseSlice";
import { Pie } from "react-chartjs-2";

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
              <Pie  data={userData}/>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AdminDashboard;
