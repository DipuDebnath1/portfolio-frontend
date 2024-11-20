"use client";
import Image from "next/image";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import { useEffect, useState } from "react";
import { navItem } from "@/app/constData/navItem";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = (sectionID: string) => {
    const aboutSection = document.getElementById(sectionID);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    setShowSidebar(false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.2, // 60% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observing all sections
    navItem.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={` lg:sticky top-0 lg:border-r-2 `}>
      {/* responsive open icons */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8 fixed top-5 left-5 z-50 cursor-pointer bg-gray-100 border lg:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>

      {/* content  */}
      <div
        className={`${
          showSidebar ? "flex" : "hidden"
        } fixed w-full lg:static py-10 lg:flex justify-between items-center flex-col min-h-screen bg-gray-200 lg:bg-transparent z-40`}
      >
        <header className="space-y-2">
          <figure className="mx-">
            <Image
              src="https://i.ibb.co.com/T0Y7cj6/dipu-1.jpg"
              height={200}
              width={200}
              className="w-40 object-cover mx-auto rounded-full border"
              alt="author Img"
            />
          </figure>
          <div>
            <h1 className="text-center text-xl font-semibold">Dipu Debnath</h1>
            <h4 className="text-center text-sm">dipudebnath966@gmail.com</h4>
          </div>
        </header>
        <main>
          <ul className="space-y-5 text-center">
            {navItem.map((item, i) => (
              <li
                onClick={() => handleScroll(item.id)}
                className={`text-lg cursor-pointer ${
                  activeSection === item.id ? "text-blue-500 font-bold" : ""
                }`}
                key={i}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </main>

        <footer className="">
          <ul className="flex gap-3">
            <li>
              <a href="https://github.com/DipuDebnath1" target="_blank">
                <GithubIcon width={50} height={50} fill="gray" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dipudebnath/"
                target="_blank"
              >
                <LinkedinIcon width={50} height={50} fill="gray" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
