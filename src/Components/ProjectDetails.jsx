import React from 'react';
import { useParams } from 'react-router-dom';
import projproject from './Projects.json';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projproject.find(p => p.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    const maxItems = Math.max(project.url.length, Math.ceil(project.description.length / 2));

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">{project.title}</h1>

            {Array.from({ length: maxItems }).map((_, index) => (
                <div key={index} className="mb-6">
                    {index < project.url.length && (
                        <img
                            src={project.url[index]}
                            alt={`Project image ${index + 1}`}
                            className="w-full mb-4 rounded shadow-lg object-cover"
                        />
                    )}

                    {index * 2 < project.description.length && (
                        <p className="text-lg text-gray-700 mb-4">
                            {project.description[index * 2]}
                        </p>
                    )}
                    {(index * 2 + 1) < project.description.length && (
                        <p className="text-lg text-gray-700 mb-4">
                            {project.description[index * 2 + 1]}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectDetails;
