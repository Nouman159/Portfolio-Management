
import React from 'react'
const projects = [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sGzGWjvIbEsNwe9i5ydHgnK-OJUPWh4Ztw&s", description: "A task management app in React helps users organize tasks with features for adding, editing, and categorizing tasks. React’s component-based design and state management ensure a responsive and intuitive user experience." },
{ url: "https://miro.medium.com/v2/resize:fit:1358/1*QN076T2tifdMc336cBiGpQ.jpeg", description: "An e-commerce platform built with React offers a seamless shopping experience with dynamic product listings, a shopping cart, and secure checkout. React’s efficient rendering and component structure streamline the user journey and improve performance." },
{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuya3pHhsZU-WaVbUQO06QgemzmGDe731vcA&s", description: "A blogging platform created with React allows users to write, edit, and publish posts with a rich text editor and commenting system. React’s modular components facilitate easy content management and a smooth user interface" },
{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RjVvg1qLxYLiBHL1NmaoGMLNMIRd7zJYU9pKHSX5CumCZ0lZPdtJEQSSHutEmWmBZBA&usqp=CAU", description: "A fitness tracking app built with React enables users to log workouts, monitor nutrition, and track progress towards fitness goals. React’s component-based architecture and state management offer a dynamic and interactive experience for personalized fitness monitoring." }
]

const Projects = () => {
    return (
        <div>
            <div className=' bg-black'>

                <div className=' text-white text-center mb-8 pt-8'> <h1 className=' text-3xl font-bold'> My Projects   </h1> </div>

                <div className=' grid grid-cols-3 gap-6'>



                    {projects.map((project, index) => (
                        <div>
                            <a href='0' target='blank'>


                                <div className=' flex flex-col  min-h-[400px] mx-10 border border-gray-300 p-4 mb-10 ' key={index}>
                                    <div className=' h-1/2 relative overflow-hidden mb-5'>
                                        <img src={project.url} alt='' className=' h-full w-full object-cover' />
                                        <hr />
                                    </div>

                                    <div className=' h-1/2' > <p className=' text-white text-center: justify-center'>
                                        {project.description}
                                    </p></div>
                                </div>
                            </a>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Projects
