import React, { Component } from 'react';
import { ContactUS }  from './ContactUs';
import heroImage from '../Assets/office_photo.jpeg'

export class AboutUs extends Component {
  render() {
    return (
      <div className="relative py-12" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        height: '100%',
        borderRadius: '0',
        border: 'fit',
        // filter: 'blur(1px)',
        zIndex: 1, 

      }}
>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">
    Welcome to ResumeRise: Unlocking Your Career Potential
  </h2>
  <p className="text-lg text-gray-600 mb-8">
    We are a dedicated team of career experts committed to helping you achieve your professional goals.
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="flex">
    <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Hardworking Creativity
      </h3>
      <p className="text-gray-600">
        Our team combines passion with innovation to solve your business challenges. We're not afraid to roll up our sleeves and think outside the box.
      </p>
    </div>
  </div>

  <div className="flex">
    <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Crafting Unique CVs
      </h3>
      <p className="text-gray-600">
        A well-written CV isn't just a document; it's your personal story. Our experienced writers tailor each CV to showcase your skills, experiences, and qualifications, ensuring you stand out in a competitive job market.
      </p>
    </div>
  </div>

  <div className="flex">
    <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Career Development
      </h3>
      <p className="text-gray-600">
        Beyond CVs, we're your career partners. Whether you're a fresh graduate or a seasoned professional, we provide personalized career development services to help you reach your goals.
      </p>
    </div>
  </div>

  <div className="flex">
    <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Leadership Training
      </h3>
      <p className="text-gray-600">
        Elevate your leadership game with our Essential Leadership Instruction. Our curriculum, developed by subject matter experts, equips you with the skills to succeed.
      </p>
    </div>
  </div>
</div>

          <div className="mt-8 text-center">
          <a
  href="/contact"
  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 mr-2"
  >
    <path
      fillRule="evenodd"
      d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
      clipRule="evenodd"
    />
  </svg>
  Contact Us
</a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              Message Us
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;