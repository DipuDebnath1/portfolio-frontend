"use client";

import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { projects } from "@/app/constData/postData";

const ProjectShowcase = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-16 px-5 bg-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Projects" bgText="My Showcase" />
        <div className="grid grid-cols-1 pt-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, showMore ? projects.length : 3).map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <Image
                height={200}
                width={300}
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500 my-2">
                  Category: {project.category}
                </p>
                <p className="text-gray-700">{project.description}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    Live
                  </a>
                  <a
                    href={project.clientCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    Client Code
                  </a>
                  <a
                    href={project.serverCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-600"
                  >
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {projects.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
