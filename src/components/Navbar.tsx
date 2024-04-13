import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
// import { useThemeSwitcher } from "../hooks/useThemeSwitcher";
import Logo from '../assets/logo1.png'
import { useState } from "react";
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    // const [activeTheme, setTheme] = useThemeSwitcher();

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-800 text-gray-300 z-10">
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
            </div>

            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hamburguer */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <Bars3Icon className="h-6 w-6" /> : <XMarkIcon className="h-6 w-6" />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="work" smooth={true} duration={500} onClick={handleClick}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
        // <header className="bg-gray-800 top-0 z-10">
        //     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        //         <a className="title-font font-medium text-white mb-4 md:mb-0">
        //             <a href="#about" className="ml-3 text-xl">
        //                 Everton Biviatello
        //             </a>
        //         </a>
        //         <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        //             <a href="#projects" className="mr-5 hover:text-white">
        //                 Past Work
        //             </a>
        //             <a href="#skills" className="mr-5 hover:text-white">
        //                 Skills
        //             </a>
        //             <a href="#testimonials" className="mr-5 hover:text-white">
        //                 Testimonials
        //             </a>
        //         </nav>
        //         <a
        //             href="#contact"
        //             className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
        //             Hire Me
        //             <ArrowRightIcon className="w-4 h-4 ml-1" />
        //         </a>
        //     </div>
        // </header>
    );
}