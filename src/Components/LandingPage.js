import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroImage from "../Assets/teachersmiling.png";
import { useState } from 'react';

const LandingPage = () => {
  const navigate = useNavigate('');

  const handleClick = () => {
    navigate('/services');
  };

  return (
    <>
      <div className=" sm:h-screen overflow-hidden">
        <div className="lg:w-screen flex justify-center h-2/3">
          <div className="w-screen flex">
            <div className="w-2/3 m-4 items-start">
              <h1 className="lg:text-4xl p-2 w-full font-bold tracking-tight text-black sm:text-2xl gradient-text">
                Unlock Your Career Potential with ResumeRise
              </h1>
              <p className="lg:text-xl w-full font-normal p-2">
                Craft a Winning Resume, Ace Interviews, and Secure Your Dream Job
              </p>
              <ul className="list-disc pl-6 lg:text-lg font-medium">
                <li>Professional Resume and Cover Letter Assistance</li>
                <li>Expert Interview Preparation and Coaching</li>
                <li>Personalized LinkedIn Profile Optimization</li>
                <li>Tailored Mentorship for Career Advancement</li>
              </ul>
              <div className="relative mt-6 pl-0 w-1/2 bg-orange-500 p-4 rounded text-white font-semibold text-center hover:bg-orange-600 cursor-pointer">
                <Link to="/services" className="block">
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="w-1/3 mt-10 m-4 items-end justify-center p-2">
              <div
                style={{
                  backgroundImage: `url(${heroImage})`,
                  backgroundSize: 'cover',
                  height: '100%',
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
                Testimonials
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hear from Our Satisfied Customers
              </p>
            </div>
            <div className="mb-10">
              <blockquote className="bg-gray-100 p-6 rounded-lg">
                <p className="text-lg font-medium text-gray-900">
                  "ResumeRise helped me transform my resume and prepare for interviews. I landed my dream job within a month!"
                </p>
                {/* <footer className="mt-4">
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Customer Avatar"
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900">
                        John Doe
                      </div>
                      <div className="text-base font-medium text-gray-500">
                        Software Engineer
                      </div>
                    </div>
                  </div>
                </footer> */}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;