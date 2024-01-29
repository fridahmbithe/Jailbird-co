import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../Assets/landing.png"
import NavBar from './NavBar';
import { useState } from 'react'

const LandingPage = () => {
  const navigate = useNavigate('');

  const handleClick =()=>{
   useNavigate= '/services'
  }
  return (
    <>
      {/* <NavBar /> */}
      <div className='bg-orange-200 sm:h-screen'>

          <div className="lg:w-screen  flex justify-center h-2/3">
            <div className="w-screen flex">
              <div className="w-2/3  m-4 items-start">
                <h2 className="lg:text-3xl p-2 w-full font-bold tracking-tight text-black sm:text-xl gradient-text ">
                  Get that ideal job by ensuring you have a great CV and cover letter and more.
                </h2>
                <p className='lg:text-xl w-full font-normal p-2'>
                  Landing a job is all about how you present yourself.
                  At <i className='text-orange-500'>Jailbird</i> we help you tailor your cover letter and CV from a professional perspective.
                  Also, provide professional training for interview preparations to avoid tension in the interview room as most of us do.
                  We also help you revamp your LinkedIn profile and we help train and mentor you into higher leadership roles.
                </p>
                <Link to="/news" >
              <div className='relative mt-6 pl-0 w-1/2 bg-gray-200 p-4 rounded text-orange-800 font-semibold text-center' 
              >
              View Our Services</div>
            </Link>
              </div>
              <div className="w-1/3 mt-10 m-4 items-end justify-center p-2">
                <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height:"100%"}}></div>
              </div>
            </div>
            
          </div>
          
        </div>

     
    </>

  );


};

export default LandingPage;