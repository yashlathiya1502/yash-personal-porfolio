// src/pages/Home.jsx
import React from "react";
import profilePhoto from "../assets/profile.png";

const Home = () => {
  return (
    <div className=" mx-auto py-6 ">
      <section className="flex justify-around items-center my-16  w-[90%] mx-auto">
        <div className=" w-full">
          <p className="font-bold text-gray-600">Hello, I'm</p>
          <p className="text-3xl font-semibold my-[16px]">Yash Lathiya</p>
          <p className="text-xl font-semibold">Web/App developer</p>
          <p className="mt-2 text-gray-600">
            I am a versatile web and app developer with a passion for delivering
            seamless, user-focused digital experiences. I strive to build
            applications that are both functional and visually appealing,
            tailored to meet the unique needs of clients and users.
          </p>
        </div>
        <div className=" w-full flex justify-center h-[350px]">
          <img src={profilePhoto} alt='profile photo'/>
        </div>
      </section>

      <section className="my-16">
        <h3 className="text-3xl font-semibold text-gray-800">Skills</h3>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "React Native",
          ].map((skill, index) => (
            <li
              key={index}
              className="p-4 bg-blue-100 rounded-lg text-center text-gray-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
