import React from 'react';
import './courses.css'
function CoursesOffered() {
  const courses = [
    {
      title: "Course 1",
      description: "Description of Course 1."
    },
    {
      title: "Course 2",
      description: "Description of Course 2."
    },
    {
      title: "Course 3",
      description: "Description of Course 3."
    },
    {
      title: "Course 4",
      description: "Description of Course 4."
    },
    {
      title: "Course 5",
      description: "Description of Course 5."
    },
    {
      title: "Course 6",
      description: "Description of Course 6."
    }
  ];

  return (
    <div>
      <h1>Courses Offered</h1>
      <div className="card-container">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesOffered;
