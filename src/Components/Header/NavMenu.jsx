import { NavLink } from "react-router-dom";
import { Navbar } from 'flowbite-react';

const NavMenu = () => {
    return (

        <div className=" w-full absolute py-5 z-10 px-4">
            <div className="max-w-screen-xl mx-auto pt-4">
                <Navbar fluid rounded className="bg-transparent sm:px-0 px-0">
                    <div>
                        <NavLink to='/' className="flex items-center">
                            <img className="w-44" src="/images/Logo.png" alt="Donation Campaign Logo" />
                        </NavLink>
                    </div>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="md:bg-transparent rounded-lg bg-white text-lg text-center">

                        <div className="flex flex-col md:flex-row md:gap-11 p-5 text-lg">
                            <li className="max-md:border-b-2 max-md:py-3">
                                <NavLink to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "text-gray-400" : isActive ? "text-red-600 underline" : ""
                                    }>Home
                                </NavLink>
                            </li>

                            <li className="max-md:border-b-2 max-md:py-3">
                                <NavLink to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "text-gray-400" : isActive ? "text-red-600 underline" : ""
                                    }>Donation
                                </NavLink>
                            </li>

                            <li className="max-md:border-b-2 max-md:py-3">
                                <NavLink to="/statistics"
                                    className={
                                        ({ isActive, isPending }) =>
                                            isPending ? "text-gray-400" : isActive ? "text-red-600 underline" : ""
                                    }>Statistics
                                </NavLink>
                            </li>
                        </div>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>

    );
};

export default NavMenu;