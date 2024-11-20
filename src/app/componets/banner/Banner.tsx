"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = () => {
  const designation = [
    {
      title: "Front End Developer",
      des: "I specialize in crafting visually appealing and responsive websites using HTML, CSS, and JavaScript. I create seamless user interfaces with Next.js and manage state efficiently with Redux.",
    },
    {
      title: "MERN Stack Developer",
      des: "I develop full-stack web applications using MongoDB, Express.js, React, and Node.js. I focus on building scalable, efficient, and responsive applications for diverse use cases.",
    },
    {
      title: "Javascript Developer",
      des: "I have expertise in modern JavaScript (ES6+), enabling me to write clean, efficient, and scalable code. I build dynamic and interactive applications with frameworks like React and Next.js.",
    },
  ];

  const [count, setCount] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade-out animation
      setTimeout(() => {
        setCount((prevCount) => (prevCount + 1) % designation.length);
        setFade(false); // Trigger fade-in animation
      }, 500); // Duration of fade-out
    }, 3000);

    return () => clearInterval(interval);
  }, [designation.length]);

  return (
    <div
      id="home"
      className="flex justify-around flex-col-reverse lg:flex-row gap-5 w-full min-h-screen relative"
    >
      {/* Background overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('https://i.ibb.co/5KFMXpv/bg-shadow.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1, // Adjust opacity here
          zIndex: -1, // Keep it behind content
        }}
      ></div>
      <div className="flex lg:w-7/12 items-center pb-[5rem] lg:pb-0">
        <div className="flex flex-col pl-10 gap-5">
          <h2 className="text-5xl font-semibold">Hi, I am DIPU DEBNATH</h2>
          <h4
            className={`flex text-2xl font-semibold gap-2 justify-start text-start transition-opacity duration-700 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            <span>A</span>
            {designation[count].title}
          </h4>
          <p
            className={`transition-opacity duration-500 text-xl ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {designation[count].des}
          </p>
          <div>
            <button className="text-lg font-semibold py-2 px-6 rounded bg-blue-500 hover:bg-blue-600 text-white">
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-5/12 flex items-end">
        <Image
          src={"https://i.ibb.co/93cGhdF/dipu-bgless.png"}
          height={500}
          width={500}
          alt="dipu img"
          className="bottom-0"
        />
      </div>
    </div>
  );
};

export default Banner;
