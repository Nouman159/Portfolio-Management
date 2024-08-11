import React from 'react';

const ProjectDetails = ({ title, details, images }) => {
    const maxItems = Math.max(images.length, Math.ceil(details.length / 2));

    return (
        <div className="p-6 max-w-4xl mx-auto">
            {/* Project Title */}
            <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>

            {/* Loop through images and group of 2 paragraphs */}
            {Array.from({ length: maxItems }).map((_, index) => (
                <div key={index} className="mb-6">
                    {/* Conditionally render image */}
                    {index < images.length && (
                        <img
                            src={images[index]}
                            alt={`Project image ${index + 1}`}
                            className="w-full mb-4 rounded shadow-lg object-cover"
                        />
                    )}

                    {/* Conditionally render two paragraphs */}
                    {index * 2 < details.length && (
                        <p className="text-lg text-gray-700 mb-4">
                            {details[index * 2]}
                        </p>
                    )}
                    {(index * 2 + 1) < details.length && (
                        <p className="text-lg text-gray-700 mb-4">
                            {details[index * 2 + 1]}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectDetails;
