import React, { useEffect } from 'react'
import HomeLayout from '../../Layouts/HomeLayout'
import {  useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesLecture } from '../../Redux/Slices/LectureSlice';

function DisplayLectures() {

  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const {state} = useLocation();
  const {lectures} = useSelector((state)=>state.lecture)
  const {role} = useSelector((state)=>state.auth)


  useEffect(()=> {
 if(!state) nevigate("/courses")
 dispatch(getCoursesLecture(state._id))
  }, [])
  return (
    <HomeLayout>
      lectures
    </HomeLayout>
  )
}

export default DisplayLectures