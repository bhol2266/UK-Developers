import Link from 'next/link';
import React from 'react';
import { courses } from '../pages/checkout';

const CourseCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {course.description}
              </p>
              <Link href={`/checkout?courseId=${course.id}`}>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition w-full">
                  Buy Course
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
