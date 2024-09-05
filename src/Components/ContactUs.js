import { useState } from "react";
import { send } from 'emailjs-com';
import styled from 'styled-components';

const ContactUs = () => {
    const Section = styled.div`
        height: 100vh;
        padding: 0;
        margin: 0;`;

    const Container = styled.div`
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1.5rem;
        padding-right: 1.5rem;`;

    const Row = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin: -0.5rem;`;

    const Col = styled.div`
        flex: 1 0 auto;
        padding: 0.5rem;`;

    const Input = styled.input`
        shadow: 0 1px 3px rgba(0,0,0,0.1);
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;`;

    const TextArea = styled.textarea`
        shadow: 0 1px 3px rgba(0,0,0,0.1);
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;`;

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState([]);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState("");
    
    const resetFormFields = () => {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Thank you for contacting us!' });
    };

    const onFormUpdate = (category, value) => {
        setFormDetails((prevDetails) => ({
            ...prevDetails,
            [category]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: `${formDetails.firstName} ${formDetails.lastName}`,
            to_name: 'ResumeRise LTD',
            email: formDetails.email,
            phone: formDetails.phone,
            message: formDetails.message,
        };

        send('service_fjr4n1u', 'template_ls8mayx', templateParams, 'gMFWFJ-J5rRjQKxZC')
            .then((response) => {
                resetFormFields();
                setButtonText("Send");
            })
            .catch((error) => {
                setStatus({ success: false, message: 'Something went wrong, please try again later.' });
                setButtonText("Send");
            });
    };

    return (
        <Section>
            <Container>
                <Row className="items-center">
                    <Col span={12} md={6}>
                        <div>
                            <h2 className="text-center font-bold m-3">Get In Touch</h2>
                            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
                                <div className="flex flex-wrap -mx-1 mb-4">
                                    <div className="w-full md:w-1/2 px-1 mb-4 md:mb-0">
                                        <Input
                                            type="text"
                                            value={formDetails.firstName}
                                            placeholder="First Name"
                                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-1">
                                        <Input
                                            type="text"
                                            value={formDetails.lastName}
                                            placeholder="Last Name"
                                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-1 mb-4">
                                    <div className="w-full md:w-1/2 px-1 mb-4 md:mb-0">
                                        <Input
                                            type="email"
                                            value={formDetails.email}
                                            placeholder="Email Address"
                                            onChange={(e) => onFormUpdate('email', e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-1">
                                        <Input
                                            type="tel"
                                            value={formDetails.phone}
                                            placeholder="Phone No."
                                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <TextArea
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        <span>{buttonText}</span>
                                    </button>
                                    {status.message && (
                                        <p className={`${status.success === false ? 'text-red-500' : 'text-green-500'} font-bold`}>
                                            {status.message}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default ContactUs;

// import React, { useState } from 'react';
// import { send } from 'emailjs-com';

// const ContactUs = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Simulate a successful form submission
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setFirstName('');
//       setLastName('');
//       setEmail('');
//       setPhoneNumber('');
//       setMessage('');
//       setSuccess(true);
//       setError(false);
//     } catch (error) {
//       setSuccess(false);
//       setError(true);
//     }
//   };

//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
//         {success && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
//             Form submitted successfully!
//           </div>
//         )}
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//             There was an error submitting the form. Please try again.
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;