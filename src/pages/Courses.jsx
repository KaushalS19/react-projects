import React from "react";
import { data } from "../data";
import {Link} from 'react-router-dom'

function Courses() {
  return (
    <>
      <div className="container p-3">
        <h1 className="mb-5">Courses</h1>
        {data.map((item) => {
          return (
            <div key={item.id} className="card p-3 mb-3 shadow">
              <h4>Name : {item.name}</h4>
              <Link to={`/courses/${item.id}`}>view</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Courses;
