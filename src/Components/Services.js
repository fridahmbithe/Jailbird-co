import React from 'react'
import styled from 'styled-components';


const ServicePage = styled.div`
  margin: 0;
  
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  gap: 6px; 
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  height: 180px; 
  padding: 8px;
  width: 100%; 
  max-width: 400px; // Set a maximum width for the card

  @media (min-width: 768px) {
    height: 200px; // medium and larger screens
    // width: calc(50% - 8px); // Two cards per row, with spacing
  }
`;
const ServiceImage = styled.img`
  width: 80px; // Reduce size for small screens
  height: 80px;
  object-fit: fit;
  border-radius: 50%;
  display: block;
  margin: 1rem; // Center the image horizontally

  @media (min-width: 768px) {
    width: 150px; 
    height: 150px;
  }
`;

const ServiceName = styled.h3`
  margin-bottom: 0.3rem;
  color: #FE9900;
  font-weight: 600;
  font-size: 0.6rem; 
  
  @media (min-width: 768px) {
    font-size: 1.2rem; 
  }
`;
const ServiceCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 1rem;
`;

const ServiceButton = styled.button`
  background-color: #FE9900;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const services = [
  {
    id: 1,
    image: '/cvwriting.jpeg',
    serviceName: 'CV Revamping',
    description: 'CV Rempaving',
    enrollNowUrl: '/services/1',

  },
  {
    id: 2,
    image: '/linkedIn.jpeg',
    serviceName: 'LinkedIn Revamp',
    description: 'Seeking an experienced software engineer with deep expertise in React and Node.js to join our cutting-edge technology team. You will be responsible for developing complex web applications and driving innovation within the company.',
    enrollNowUrl: '/services/2',
  },
  {
    id: 3,
    image: '/interviewprep.jpeg',
    serviceName: 'Interview Preparation',
    description: 'Seeking an experienced software engineer with deep expertise in React and Node.js to join our cutting-edge technology team. You will be responsible for developing complex web applications and driving innovation within the company.',
    enrollNowUrl: '/services/3',
  },
  {
    id: 4,
    image: '/leadtrain.jpeg',
    serviceName: 'Leadership Coaching',
    description: 'Seeking an experienced software engineer with deep expertise in React and Node.js to join our cutting-edge technology team. You will be responsible for developing complex web applications and driving innovation within the company.',
    enrollNowUrl: '/services/4',
  },
];

function Services() {
  return (
    <div className='h-screen'>
      <ServicePage>
        <ServiceContainer>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceImage src={service.image} alt='Uh Oh!' />
              <ServiceCardContent>
                <ServiceName>{service.serviceName.toUpperCase()}</ServiceName>
                <ServiceButton onClick={() => window.location.href = service.enrollNowUrl}>
                  Enroll Now
                </ServiceButton>
              </ServiceCardContent>
            </ServiceCard>
          ))}
        </ServiceContainer>
      </ServicePage>
    </div>
  )
}
export default Services