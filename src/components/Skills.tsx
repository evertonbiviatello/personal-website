import { CheckBadgeIcon } from "@heroicons/react/20/solid";

export const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node",
    "GraphQL",
    "Material UI",
];

export const Skills = () => {
    return (
        <section id="skills">
            <div className="w-full h-screen bg-[#0a192f] text-gray-300">
                {/* <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                        <p className='py-4'>// These are the technologies I've worked with</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                            <p className='my-4'>REACT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                            <p className='my-4'>GITHUB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                            <p className='my-4'>NODE JS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                            <p className='my-4'>MONGO DB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                            <p className='my-4'>TAILWIND</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                            <p className='my-4'>FIREBASE</p>
                        </div>
                    </div>
                </div> */}


                <div className="max-w-[1000px] text-center mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className="mb-12">
                        {/* <CpuChipIcon className="w-10 inline-block mb-4" /> */}
                        <div className="text-left md:text-center mb-10">
                            <p className='text-4xl font-bold inline border-b-4 border-pink-600 mb-6'>
                                Skills
                            </p>
                        </div>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                            possimus est.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {skills.map((skill) => (
                            <div key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                    <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="title-font font-medium text-white">
                                        {skill}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}