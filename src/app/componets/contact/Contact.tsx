"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Simulate form submission (replace this with actual backend API call)
    try {
      // Replace this with an actual API call
      console.log("Form Data Submitted:", formData);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      setSubmitError(
        `${error.message}There was an issue submitting your form. Please try again. `
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full py-16 px-8 ">
      <SectionTitle title="Contact" bgText="Get in Touch" />

      <div className="flex justify-between flex-col gap-10 pt-10 lg:flex-row items-center">
        {/* social Link  */}
        <div className="lg:w-1/2 space-y-5">
          <div className="flex gap-10 items-center border rounded">
            <div className="bg-gray-100 p-10 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <p>dipudebnath966@gmail.com</p>
          </div>
          <div className="flex gap-10 items-center border rounded">
            <div className="bg-gray-100 p-10 rounded">
              {" "}
              <WhatsAppIcon />
            </div>

            <p>+8801773524570</p>
          </div>
          <div className="flex gap-10 items-center border rounded">
            <a href="https://www.linkedin.com/in/dipudebnath/" target="_blank">
              <div className="bg-gray-100 p-10 rounded">
                <LinkedinIcon />
              </div>
            </a>{" "}
            <a href="https://www.linkedin.com/in/dipudebnath/" target="_blank">
              <p>LinkedIn</p>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className=" bg-white rounded-lg  text-start lg:flex-1"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col mt-6">
              <label
                htmlFor="message"
                className="text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg disabled:bg-gray-400"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {submitSuccess && (
              <p className="mt-4 text-green-600">
                Thank you for your message! I will get back to you soon.
              </p>
            )}

            {submitError && <p className="mt-4 text-red-600">{submitError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
