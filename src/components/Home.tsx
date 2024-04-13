// import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
// import developerLight from '../assets/developer.svg';
// import developerDark from '../assets/developer-dark.svg';

import { ArrowRightIcon } from "@heroicons/react/20/solid"

export const Home = () => {
    // const [activeTheme] = useThemeSwitcher();

    return (
        <section id="home">
            <div className="w-full h-screen bg-[#0a192f]">
                {/* container */}
                <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                    <p className="text-pink-600">Hi, my name is</p>
                    <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Everton Biviatello</h1>
                    <h1 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Backend Developer</h1>
                    <p className="text-[#8892b0] py-4 max-w-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum justo dui, vel laoreet leo dapibus sed.
                        Integer congue arcu in nisl tincidunt sollicitudin. Fusce ut dui dignissim, laoreet enim faucibus, congue nunc.
                        Quisque pretium laoreet nisi, at dapibus dolor tincidunt id. Praesent sodales non tellus eget pellentesque
                    </p>
                    <div>
                        <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">View Work <ArrowRightIcon className="ml-3 h-5 w-5" /></button>
                    </div>
                </div>
            </div>
        </section>
        // <div className="container mx-auto">
        //     <section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
        //         <div className="w-full md:w-1/3 text-left">

        //             <h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
        //             >
        //                 Hi, Iam Stoman</h1>
        //             <p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
        //             >
        //                 A Full-Stack Developer & Design Enthusiast
        //             </p>

        //             <div className="flex justify-center sm:block">
        //                 <a
        //                     download="Stoman-Resume.pdf"
        //                     href="/files/Stoman-Resume.pdf"
        //                     className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
        //                     aria-label="Download Resume"
        //                 >
        //                     {/* <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle> */}
        //                     <span className="text-sm sm:text-lg font-general-medium duration-100">
        //                         Download CV
        //                     </span>
        //                 </a>
        //             </div>
        //         </div>

        //         <div className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0">
        //             <img
        //                 src={
        //                     activeTheme === 'dark' ? developerLight : developerDark
        //                 }
        //                 alt="Developer"
        //             />

        //         </div>
        //     </section>

        // </div>
    )

}