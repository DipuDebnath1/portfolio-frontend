"use client";
import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import { blogs } from "@/app/constData/blogs";
import Link from "next/link";
import { useState } from "react";

const BlogsComponents = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="blogs" className="py-16 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-5">
        <SectionTitle title="Blogs" bgText="READ BLOGS" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.slice(0, showMore ? blogs.length : 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition"
            >
              <figure>
                <Image
                  height={200}
                  width={300}
                  src={blog.img}
                  alt="Blog/img"
                  className="w-full"
                />
              </figure>
              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                Published: {blog.date}
              </p>
              <Link
                href={`/blogs/${blog.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
        {blogs.length > 3 && (
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

export default BlogsComponents;
