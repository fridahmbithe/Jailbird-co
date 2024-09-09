import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { useState, useEffect } from 'react';

const JobsPage = styled.div`
  background-color: #F4FEFE;
  margin: 0;
  padding: 2rem; // Reduce padding for small screens

  @media (min-width: 768px) {
    padding: 4rem; // Increase padding for medium and larger screens
  }
`;

const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const JobCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  height: 180px; // Reduce height for small screens
  padding: 8px;

  @media (min-width: 768px) {
    height: 220px; // Increase height for medium and larger screens
  }
`;

const JobImage = styled.img`
  width: 80px; // Reduce size for small screens
  height: 80px;
  object-fit: fit;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100px; // Increase size for medium and larger screens
    height: 100px;
  }
`;

const JobDetails = styled.div`
  flex-grow: 1;
  padding: 0.5rem; 
  
  @media (min-width: 768px) {
    padding: 1rem; 
  }
`;

const CompanyName = styled.h3`
  margin-bottom: 0.3rem;
  color: #FE9900;
  font-weight: 600;
  font-size: 0.6rem; 
  
  @media (min-width: 768px) {
    font-size: 1.2rem; 
  }
`;

const JobDescription = styled.p`
  margin-bottom: 0.2rem;
  font-size: 0.5rem; 
  
  @media (min-width: 768px) {
    font-size: 1rem; 
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
`;

const Skill = styled.span`
  background-color: #f0f0f0;
  padding: 0.25rem 0.25rem;
  border-radius: 4px;
  font-size: 0.875rem;
`;

const ReadMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 0.4rem;
  margin-bottom: 0.2rem;

  &:hover {
    text-decoration: underline;
  }
      @media (min-width: 768px) {
    font-size: 1rem; // Increase font size for medium and larger screens
  }
`;


const Jobs = () => {
  const [jobData, setJobs] = useState([]);

  const jobs = {
    id: null, 
    image: '', 
    companyName: '', 
    position: '', 
    description: '', 
    role: '', 
    languages: '',
    readMoreUrl: '', 
    postedAt: '' 
  };

  useEffect(() => {
    axios.get('http://localhost:3300/api/jobs')
      .then((response) => {
        const jobs = response.data.map(jobData => ({
          id: jobData.Id,
          image: jobData.Image,
          companyName: jobData.CompanyName,
          position: jobData.Position,
          description: jobData.Description,
          role: jobData.Role,
          languages: jobData.Languages.split(','), // Assuming languages are a comma-separated string
          readMoreUrl: jobData.ReadMoreUrl,
          postedAt: jobData.PostedAt
        }));
        setJobs(jobs);
        console.log(jobs); 
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <JobsPage >
      <JobsContainer>
        {jobData.map((job) => (
          <JobCard key={job.id}>
            <JobImage src={job.image} alt='Uh Oh!' />
            <JobDetails>
              <CompanyName>{job.companyName}</CompanyName>
              <JobDescription style={{ fontWeight: "700", color: "#000000" }}>Role: {job.position}</JobDescription>
              <JobDescription>{job.description}</JobDescription>
              <SkillList style={{ color: '#FE9900' }}>
                {job.languages.map((language, index) => (
                  <Skill key={index}>{language.trim()}</Skill>
                ))}
              </SkillList>
              <JobDescription>{job.postedAt}</JobDescription>
              <ReadMoreLink href={job.readMoreUrl}>Read More</ReadMoreLink>
            </JobDetails>
          </JobCard>
        ))}
      </JobsContainer>
    </JobsPage>

  );
};

export default Jobs;