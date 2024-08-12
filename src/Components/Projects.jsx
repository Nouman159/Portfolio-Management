import React from 'react';

const projects = [
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sGzGWjvIbEsNwe9i5ydHgnK-OJUPWh4Ztw&s",
        description: "A task management app in React helps users organize tasks with features for adding, editing, and categorizing tasks. React’s component-based design and state management ensure a responsive and intuitive user experience."
    },
    {
        url: "https://miro.medium.com/v2/resize:fit:1358/1*QN076T2tifdMc336cBiGpQ.jpeg",
        description: "An e-commerce platform built with React offers a seamless shopping experience with dynamic product listings, a shopping cart, and secure checkout. React’s efficient rendering and component structure streamline the user journey and improve performance."
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuya3pHhsZU-WaVbUQO06QgemzmGDe731vcA&s",
        description: "A blogging platform created with React allows users to write, edit, and publish posts with a rich text editor and commenting system. React’s modular components facilitate easy content management and a smooth user interface."
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RjVvg1qLxYLiBHL1NmaoGMLNMIRd7zJYU9pKHSX5CumCZ0lZPdtJEQSSHutEmWmBZBA&usqp=CAU",
        description: "A fitness tracking app built with React enables users to log workouts, monitor nutrition, and track progress towards fitness goals. React’s component-based architecture and state management offer a dynamic and interactive experience for personalized fitness monitoring."
    }
];

const Projects = () => {
    return (
        <div className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold">My Projects</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-12">
                    {projects.map((project, index) => (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" key={index}>
                            <div className="flex flex-col min-h-[400px] bg-gray-800 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
                                <div className="h-64 relative overflow-hidden">
                                    <img src={project.url} alt="Project" className="h-full w-full object-cover" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-center">
                                    <p className="text-center">
                                        {project.description}
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

export default Projects;
