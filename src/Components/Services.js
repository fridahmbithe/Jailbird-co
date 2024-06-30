import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Services extends Component {
  render() {
    return (
      <div className=' h-screen w-screen' style={{backgroundColor:"#F4FEFE"}}>
        <div className='text-black font-bold text-2xl text-center'>
          Explore Our Services
        </div>
        <div className='flex flex-auto my-4 gap-x-2 h-1/3 p-2 justify-evenly'>
          <div className='w-1/5 bg-slate-400 '>
            <p className='text-center mt-4 font-semibold'>CV && LinkedIn Revamp</p>
            <Link to="/training">
              <button className='flex flex-row bg-slate-50 mx-10 text-center my-6 rounded-md p-1'>Enroll Now!
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </button>
            </Link>
          </div>
          <div className='w-1/5 bg-violet-300'>
            <p className='text-center mt-4 font-semibold'>Interview Preparations</p>
            <Link to="/training">
              <button className='flex flex-row bg-slate-50 mx-10 text-center my-6 rounded-md p-1'>Enroll Now!
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </button>
            </Link>
          </div>
          <div className='w-1/5 bg-blue-300'>
            <p className='text-center mt-4 font-semibold'>Cover Letter Revamp</p>
            <Link to="/training">
              <button className='flex flex-row bg-slate-50 mx-10 text-center my-6 rounded-md p-1'>Enroll Now!
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </button>
            </Link>
          </div>
          <div className='w-1/5 bg-red-300'>
            <p className='text-center mt-4 font-semibold'>Leadership Training</p>
            <Link to="/training">
              <button className='flex flex-row bg-slate-50 mx-10 text-center my-6 rounded-md p-1'>Enroll Now!
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

              </button>
            </Link>

          </div>
        </div>


      </div>
    )
  }
}

export default Services