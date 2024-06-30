import React, { Component } from 'react'

export class AboutUs extends Component {
    render() {
        return (
            <div className=' h-screen w-screen' style={{backgroundColor:'#F4FEFE'}}>
                <div className='text-center text-black text-3xl font-bold'>About ResumeRise Limited</div>
                <div className='m-3 justify-start'>
                    <p>Jailbird is a leading Job advertising, CV creation and leadership Training company that specializes in
                        helping individuals reach their career goals by providing top-notch CV writing and
                        career development services. Our team of experienced writers and career experts is dedicated
                        to helping clients achieve success in their chosen fields.
                    </p>
                    <p>
                        At Jailbird, we understand that a well-written and thoughtfully crafted CV is the key
                        to unlocking professional opportunities. Our team of writers works tirelessly to create
                        CVs that showcase our clients' unique skills, experiences, and qualifications.
                        We believe that a great CV not only highlights our clients' achievements but also tells
                        their personal story.
                    </p>
                    <p>
                        In addition to our CV creation services, Jailbird also offers leadership development programs.
                        We believe that effective leadership is a crucial element of success in any industry.
                        Our leadership development programs are designed to help individuals develop the skills and
                        traits needed to become effective leaders. We offer a range of courses that cover topics such
                        as communication, team building, conflict resolution, and strategic thinking.
                    </p>
                </div>
                <div className='m-3 justify-start'>
                    <p className='font-semibold text-xl flex flex-row text-center  p-1 '>Contact Us
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>

                    </p>
                    <p className='font-semibold text-xl flex flex-row text-center  p-1 '>Message Us
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>


                    </p>
                </div>
            </div>
        )
    }
}

export default AboutUs