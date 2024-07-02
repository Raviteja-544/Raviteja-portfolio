import React from "react";
import seating from '../assets/seating.jpg';
import Hotelbooking from '../assets/Hotelbooking.png';
import sentiment from '../assets/sentiment.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    const getImageSrc = (title) => {
        switch (title) {
            case 'Online Hotel Booking':
                return Hotelbooking;
            case 'Automatic Exam Seating Arrangement':
                return seating;
            case 'Sentimental Analysis':
                return sentiment;
            default:
                return '';
        }
    };

    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={getImageSrc(title)} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className='text-[14px] text-blue-500'>
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Automatic Exam Seating Arrangement',
        description: 'Automated seating arrangements using MERN stack technologies. Revolutionized traditional methods, reducing manual workload. Enhanced efficiency and accuracy in seating allocation',
        image: seating,
        git: 'https://github.com/Raviteja-544',
        technologies: ['MongoDb', 'ReactJS', 'NodeJS', 'ExpressJs']
    },
    {
        title: 'Online Hotel Booking',
        description: ' Engineered a full-stack web application for seamless online hotel booking. Enabled multiple concurrent users with minimal downtime. Improved user experience with flexible reservation options.',
        image: Hotelbooking,
        git: "https://github.com/Raviteja-544",
        technologies: ['React JS', 'MongoDB', 'NodeJS','ExpresssJs']
    },
    {
        title: 'Sentimental Analysis',
        description: ' Developed a sentiment analysis project on the Agneepath Scheme, utilizing web scraping techniques. Inspired by real-life observations, the project aims to discern the emotional tone of the text, categorizing it into negative, neutral, or positive sentiments.',
        image: sentiment,
        git: "https://github.com/Raviteja-544",
        technologies: ['python', 'NLP', 'Regular Expressions']
    }
];

export default Projects;
