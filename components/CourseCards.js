import Link from 'next/link';
import React from 'react';

const courses = [
    {
        title: 'Web Development',
        description:
            'Master HTML, CSS, JavaScript, and React to build stunning websites from scratch.',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D',
        btnText: 'Buy Course',
    },
    {
        title: 'Mobile App Development',
        description:
            'Create high-performance apps for iOS and Android using Flutter or React Native.',
        image: 'https://media.istockphoto.com/id/1195696110/photo/hands-using-mobile-payments-digital-marketing-banking-network-online-shopping-and-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=jRLDwI6fHep_ixS6SevZUSrk5tXkjxDGW5PnrZpved0=',
        btnText: 'Buy Course',
    },
    {
        title: 'UI/UX Design',
        description:
            'Learn the principles of great design. Create beautiful, user-friendly interfaces.',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VUklMkZVWCUyMERlc2lnbnxlbnwwfHwwfHx8Mg%3D%3D',
        btnText: 'Buy Course',
    },
    {
        title: 'Backend Developments',
        description:
            'Build scalable backend systems using Node.js, Express, and databases like MongoDB.',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        btnText: 'Buy Course',
    },
];

const CourseCards = () => {
    return (
        <Link href="/membership" className="cursor-pointer">


            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-7xl">
                    {courses.map((course, index) => (
                        <div
                            key={index}
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
                                <p className="text-gray-600 text-sm mb-4 flex-1">{course.description}</p>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition w-full">
                                    {course.btnText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Link>

    );
};

export default CourseCards;
