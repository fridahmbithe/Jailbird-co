import React from 'react';
import styled from 'styled-components';



const JobsPage = styled.div`
  background-color: #F4FEFE;
  margin: 0 ;
  padding: 4rem;
`
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
  height: 220px;
  padding: 8px
`;

const JobImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: fit;
  border-radius: 50%;

`;

const JobDetails = styled.div`
  flex-grow: 1;
  padding: 1rem;
`;

const CompanyName = styled.h3`
  margin-bottom: 0.5rem;
  color: #FE9900;
  font-weight: 600;
`;

const JobDescription = styled.p`
  margin-bottom: 0.2rem;
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

  &:hover {
    text-decoration: underline;
  }
`;


const jobs = [
  {
    id: 1,
    image: '/adani.jpeg',
    companyName: 'Adani-Solar Tech Solutions',
    position: 'Senior Software Engineer',
    description: 'Seeking an experienced software engineer with deep expertise in React and Node.js to join our cutting-edge technology team. You will be responsible for developing complex web applications and driving innovation within the company.',
    role: 'Frontend',
    languages: ['React ', 'Node.js ', 'JavaScript'],
    readMoreUrl: '/jobs/1',
    postedAt: "1d ago",

  },
  {
    id: 2,
    image: '/altstom.jpeg',
    companyName: 'Altstorm Corp',
    position: 'UX Designer',
    description: 'We are looking for a talented UX designer to help us create visually stunning and highly intuitive user experiences for our clients. You should have a strong portfolio showcasing your work in user research, interaction design, and prototyping.',
    role: 'Design',
    languages: ['Figma ', 'Adobe XD ', 'Sketch'],
    readMoreUrl: '/jobs/2',
    postedAt: "1d ago",
  },
  {
    id: 3,
    image: '/AMAZON.jpeg',
    companyName: 'Insights Unlimited',
    position: 'Data Scientist',
    description: 'We are seeking a data science expert to join our team and help us unlock valuable insights from our vast data sets. You should have experience in statistical analysis, machine learning, and data visualization, as well as a strong background in Python or R.',
    role: 'Data',
    languages: ['Python ', 'R ', 'SQL'],
    readMoreUrl: '/jobs/3',
    postedAt: "2d ago",
  },
  {
    id: 4,
    image: '/amdocs.jpeg',
    companyName: 'Amdocs CloudOps Solutions',
    position: 'DevOps Engineer',
    description: 'We are seeking a skilled DevOps engineer to help us automate and streamline our infrastructure and deployment processes. You should have experience with tools like Docker, Kubernetes, and Ansible, as well as a strong understanding of cloud computing.',
    role: 'DevOps',
    languages: ['Docker ', 'Kubernetes ', 'Ansible'],
    readMoreUrl: '/jobs/4',
    postedAt: "4d ago",
  },
  {
    id: 5,
    image: '/eternia.jpeg',
    companyName: 'Eternia Security Group',
    position: 'Cybersecurity Analyst',
    description: 'We are looking for a cybersecurity expert to join our team and help us protect our clients, data and systems from cyber threats. You should have a strong background in network security, threat analysis, and incident response.',
    role: 'Security',
    languages: ['Python ', 'Bash ', 'Wireshark'],
    readMoreUrl: '/jobs/5',
    postedAt: "1weeks ago",
  },
  {
    id: 6,
    image: '/MobileX.jpeg',
    companyName: 'MobileX Solutions',
    position: 'Mobile App Developer',
    description: 'We are seeking a talented mobile app developer to join our team and help us create cutting-edge mobile applications for our clients. You should have experience in either iOS or Android development, as well as a strong understanding of mobile UX principles.',
    role: 'Mobile',
    languages: ['Swift ', 'Kotlin ', 'React Native'],
    readMoreUrl: '/jobs/6',
    postedAt: "2weeks ago",
  },
  {
    id: 7,
    image: '/Nestle.jpeg',
    companyName: 'API Architects',
    position: 'Backend Engineer',
    description: 'We are looking for a skilled backend engineer to join our team and help us design and implement robust and scalable APIs. You should have experience with frameworks like Express.js or Django, as well as a strong understanding of RESTful API design principles.',
    role: 'Backend',
    languages: ['Node.js ', 'Python ', 'SQL'],
    readMoreUrl: '/jobs/7',
    postedAt: "2weeks ago",
  },
  {
    id: 8,
    image: '/innovate.jpeg',
    companyName: 'Innovate Solutions',
    position: 'Product Manager',
    description: 'We are seeking a talented product manager to join our team and help us define and execute our product strategy. You should have experience in user research, product development, and cross-functional collaboration, as well as a passion for creating innovative solutions that delight our customers.',
    role: 'Product',
    languages: ['Jira ', 'Confluence ', 'Figma'],
    readMoreUrl: '/jobs/8',
    postedAt: "2weeks ago",
  },
  {
    id: 9,
    image: '/insightE.jpeg',
    companyName: 'Insight Engines',
    position: 'Machine Learning Engineer',
    description: 'We are looking for a skilled machine learning engineer to join our team and help us develop advanced AI-powered solutions for our clients. You should have experience in building and deploying machine learning models, as well as a strong understanding of data preprocessing, feature engineering, and model optimization.',
    role: 'Data',
    languages: ['Python ', 'TensorFlow ', 'scikit-learn'],
    readMoreUrl: '/jobs/9',
    postedAt: "4weeks ago",
  },
  {
    id: 10,
    image: '/AMAZON.jpeg',
    companyName: 'Pixel Playground',
    position: 'Game Developer',
    description: 'We are seeking a talented game developer to join our team and help us create engaging and visually stunning games. You should have experience in game engines like Unity or Unreal, as well as a strong understanding of game design principles and a passion for creating immersive gaming experiences.',
    role: 'Gaming',
    languages: ['C# ', 'C++ ', 'Unity'],
    readMoreUrl: '/jobs/10',
    postedAt: "5weeks ago",
  }
];

const Jobs = () => {
  return (
    <JobsPage >
      <JobsContainer>
        {jobs.map((job) => (
          <JobCard key={job.id}>
            <JobImage src={job.image} alt='Uh Oh!' />
            <JobDetails>

              <CompanyName>{job.companyName.toUpperCase()}</CompanyName>
              <JobDescription style={{ fontWeight: "700", color: "#000000" }}>Role: {job.position}</JobDescription>
              {/* <JobDescription>{job.role}</JobDescription> */}
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