import React from 'react';
import styled from 'styled-components';
import teachersmilling from "../Assets/teachersmiling.png"

const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;
`;

const JobCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const JobImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

`;

const JobDetails = styled.div`
  flex-grow: 1;
  padding: 1.5rem;
`;

const CompanyName = styled.h3`
  margin-bottom: 0.5rem;
`;

const JobDescription = styled.p`
  margin-bottom: 1rem;
`;

const ReadMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const jobs = [
  {
    id: 1,
    image: './Assets/teachersmiling.png',
    companyName: 'Acme Tech Solutions',
    position: 'Senior Software Engineer',
    description: 'Seeking an experienced software engineer with deep expertise in React and Node.js to join our cutting-edge technology team. You will be responsible for developing complex web applications and driving innovation within the company.',
    role: 'Frontend',
    languages: ['React ', 'Node.js ', 'JavaScript'],
    readMoreUrl: '/jobs/1'
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/?ux-design',
    companyName: 'Pixel Perfect Design',
    position: 'UX Designer',
    description: 'We are looking for a talented UX designer to help us create visually stunning and highly intuitive user experiences for our clients. You should have a strong portfolio showcasing your work in user research, interaction design, and prototyping.',
    role: 'Design',
    languages: ['Figma ', 'Adobe XD ', 'Sketch'],
    readMoreUrl: '/jobs/2'
  },
  {
    id: 3,
    image: '/AMAZON.jpeg',
    companyName: 'Insights Unlimited',
    position: 'Data Scientist',
    description: 'We are seeking a data science expert to join our team and help us unlock valuable insights from our vast data sets. You should have experience in statistical analysis, machine learning, and data visualization, as well as a strong background in Python or R.',
    role: 'Data',
    languages: ['Python ', 'R ', 'SQL'],
    readMoreUrl: '/jobs/3'
  },
  {
    id: 4,
    image: 'https://source.unsplash.com/?devops',
    companyName: 'CloudOps Solutions',
    position: 'DevOps Engineer',
    description: 'We are seeking a skilled DevOps engineer to help us automate and streamline our infrastructure and deployment processes. You should have experience with tools like Docker, Kubernetes, and Ansible, as well as a strong understanding of cloud computing.',
    role: 'DevOps',
    languages: ['Docker ', 'Kubernetes ', 'Ansible'],
    readMoreUrl: '/jobs/4'
  },
  {
    id: 5,
    image: 'https://source.unsplash.com/?cybersecurity',
    companyName: 'Cipher Shield',
    position: 'Cybersecurity Analyst',
    description: 'We are looking for a cybersecurity expert to join our team and help us protect our clients, data and systems from cyber threats. You should have a strong background in network security, threat analysis, and incident response.',
    role: 'Security',
    languages: ['Python ', 'Bash ', 'Wireshark'],
    readMoreUrl: '/jobs/5'
  },
  {
    id: 6,
    image: 'https://source.unsplash.com/?mobile-development',
    companyName: 'MobileX Solutions',
    position: 'Mobile App Developer',
    description: 'We are seeking a talented mobile app developer to join our team and help us create cutting-edge mobile applications for our clients. You should have experience in either iOS or Android development, as well as a strong understanding of mobile UX principles.',
    role: 'Mobile',
    languages: ['Swift ', 'Kotlin ', 'React Native'],
    readMoreUrl: '/jobs/6'
  },
  {
    id: 7,
    image: 'https://source.unsplash.com/?backend-development',
    companyName: 'API Architects',
    position: 'Backend Engineer',
    description: 'We are looking for a skilled backend engineer to join our team and help us design and implement robust and scalable APIs. You should have experience with frameworks like Express.js or Django, as well as a strong understanding of RESTful API design principles.',
    role: 'Backend',
    languages: ['Node.js ', 'Python ', 'SQL'],
    readMoreUrl: '/jobs/7'
  },
  {
    id: 8,
    image: 'https://source.unsplash.com/?product-management',
    companyName: 'Innovate Solutions',
    position: 'Product Manager',
    description: 'We are seeking a talented product manager to join our team and help us define and execute our product strategy. You should have experience in user research, product development, and cross-functional collaboration, as well as a passion for creating innovative solutions that delight our customers.',
    role: 'Product',
    languages: ['Jira ', 'Confluence ', 'Figma'],
    readMoreUrl: '/jobs/8'
  },
  {
    id: 9,
    image: 'https://source.unsplash.com/?machine-learning',
    companyName: 'Insight Engines',
    position: 'Machine Learning Engineer',
    description: 'We are looking for a skilled machine learning engineer to join our team and help us develop advanced AI-powered solutions for our clients. You should have experience in building and deploying machine learning models, as well as a strong understanding of data preprocessing, feature engineering, and model optimization.',
    role: 'Data',
    languages: ['Python ', 'TensorFlow ', 'scikit-learn'],
    readMoreUrl: '/jobs/9'
  },
  {
    id: 10,
    image: 'https://source.unsplash.com/?game-development',
    companyName: 'Pixel Playground',
    position: 'Game Developer',
    description: 'We are seeking a talented game developer to join our team and help us create engaging and visually stunning games. You should have experience in game engines like Unity or Unreal, as well as a strong understanding of game design principles and a passion for creating immersive gaming experiences.',
    role: 'Gaming',
    languages: ['C# ', 'C++ ', 'Unity'],
    readMoreUrl: '/jobs/10'
  }
];

const Jobs = () => {
  return (
    <JobsContainer>
      {jobs.map((job) => (
        <JobCard key={job.id}>
          <JobImage src={job.image} alt= 'reload!' />
          <JobDetails>
            
            <CompanyName>{job.companyName}</CompanyName>
            <JobDescription>{job.position}</JobDescription>
            <JobDescription>{job.role}</JobDescription>
            <JobDescription>{job.description}</JobDescription>
            <JobDescription>{job.languages}</JobDescription>
            <ReadMoreLink href={job.readMoreUrl}>Read More</ReadMoreLink>
          </JobDetails>
        </JobCard>
      ))}
    </JobsContainer>
  );
};

export default Jobs;