import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";

function CourseDetail() {
  const {id} = useParams();
    const [singleCourseDetail,setSingleCourseDetail] = useState({})
  useEffect(() => {
    const singleData = data.find((item) => item.id == id);
    setSingleCourseDetail(singleData)
  }, []);
  return (
    <>
      <div className="container p-4">
        <h2 className="mb-4">Course Details</h2>
        <div className="row">
            <div className="card col-md-4 shadow p-4">
                <h5>Id : {singleCourseDetail.id}</h5>
                <h5>Name : {singleCourseDetail.name}</h5>
                <h5>Price : {singleCourseDetail.price}</h5>
            </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
