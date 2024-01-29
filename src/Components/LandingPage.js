import React from 'react';
import { Link } from 'react-router-dom';
import image from "../Assets/landing.png"
import NavBar from './NavBar';
import { useState } from 'react'

const LandingPage = () => {
  const [showInstitutinCard, setShowInstitutionCard] = useState(false);
  const [showLearnerCard, setLeanerCard] = useState(false);
  const [showNestedList, setShowNestedList] = useState(false);

  const handleInstitutionClick = () => {
    setShowInstitutionCard(!showInstitutinCard);
  };
  const handleLearnerClick = () => {
    setLeanerCard(!showLearnerCard)
  }
  const handleListItemClick = () => {
    setShowNestedList(!showNestedList);
  };
  return (
    <>
      {/* <NavBar /> */}
      <div >

          <div className="lg:w-screen sm:h-screen flex justify-center">
            <div className="w-screen flex">
              <div className="w-2/3 m-4 items-start">
                <h2 className="lg:text-2xl w-full font-bold tracking-tight text-black sm:text-xl gradient-text ">
                  Get that ideal job by ensuring you have a great CV and cover letter and more.
                </h2>
                <p>Landing a job is all about how you present yourself.
                  At Jailbird we help you tailor your cover letter and CV from a professional perspective.
                  Also, provide professional training for interview preparations to avoid tension in the interview room as most of us do.
                  We also help you revamp your LinkedIn profile and we help train and mentor you into higher leadership roles.
                </p>
              </div>
              <div className="w-1/3 mt-10 m-4 items-end justify-center">
                <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height:"50%"}}></div>
              </div>
            </div>
          </div>
        </div>

      {/* <div
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height: '100vh' }}
      >
        <div className='w-screen h-screen gap-4 p-4'>
          <div className='text-2xl italics text-center'>Welcome</div>
          <div className='flex flex-wrap my-4 gap-x-4 h-1/3'>
            <div className='bg-red-300 text-center text-4xl font-bold h-26 flex-auto flex items-center justify-center order-2 m-2'
              onClick={handleInstitutionClick}>
              <p>Institution</p>
              {showInstitutinCard && (
                <div className="card bg-white translate-x-6">
                  <ul>
                    <li>Institution Bio-Data</li>
                    <li>Emergency Reports</li>
                    <li>Bank Accounts</li>
                    <li>Capitation</li>
                  </ul>
                </div>
              )}

            </div>
            <div className='bg-green-300 m-2 text-center text-4xl font-bold h-26 flex-auto flex items-center justify-center order-1'
              onClick={handleLearnerClick}>
              <p>Learner</p>
              {
                showLearnerCard && (
                  <div className='card bg-slate-50'>
                    <ul>
                      <li onClick={handleListItemClick}>
                        Learners
                        {showNestedList && (
                          <ul>
                            <li>Subitem 1</li>
                            <li>Subitem 2</li>
                          </ul>
                        )}
                      </li>
                    </ul>
                    <li>
                      Registrations
                    </li>
                    <li>
                      Transfers
                    </li>
                    <li>
                      Attendance
                    </li>
                    <li>
                      Deceased Cases
                    </li>
                  </div>
                )
              }
            </div>
          </div>
          <div className='flex flex-wrap  text-center gap-y-4  my-4 h-1/3'>
            <div className='bg-pink-300 m-2 text-center text-4xl font-bold h-26 flex-auto flex items-center justify-center'>
              <p>Reports</p>
            </div>
            <div className='bg-yellow-300 m-2 text-4xl font-bold h-26 flex-auto flex items-center justify-center'>
              <p>Staff</p>
            </div>
          </div>

        </div>
        
      </div> */}
    </>

  );


};

export default LandingPage;