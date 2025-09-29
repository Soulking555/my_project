import React, { useState } from "react";

const coursesData = [
  { id: 1, coursename: "Computer Architecture", duration: "3 months" },
  { id: 2, coursename: "Data Structures", duration: "2 months" },
  { id: 3, coursename: "Operating Systems", duration: "4 months" },
  { id: 4, coursename: "Machine Learning", duration: "6 months" },
  { id: 5, coursename: "Database Systems", duration: "3 months" },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter((course) =>
    course.coursename.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Courses</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search courses by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{course.coursename}</h2>
              <p className="text-gray-600">Duration: {course.duration}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No courses found
          </p>
        )}
      </div>
    </div>
  );
}
