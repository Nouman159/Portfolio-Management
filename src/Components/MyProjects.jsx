import React from 'react';
import projDetails from './Projects.json';

const MyProjects = () => {
    return (
        <div id='projects' className="bg-slate-50 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-5xl text-black font-bold font-roboto">My Projects</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-12 sm:mx-2">
                    {projDetails.map((project, index) => (
                        <a
                            href={project.projectUrl}
                            target='_blank'
                            rel="noopener noreferrer"
                            key={index}
                            className='bg-gray-800 border-2 hover:scale-105 hover:shadow-xl'
                        >
                            <div className="flex flex-col min-h-[400px] max-h-[500px] overflow-hidden transform transition duration-500">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={project.url[0]} alt={`Project ${project.id}`} className="h-full w-full object-cover" loading="lazy" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-center text-gray-200 overflow-hidden text-ellipsis line-clamp-6">
                                        {project.description[0]}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
