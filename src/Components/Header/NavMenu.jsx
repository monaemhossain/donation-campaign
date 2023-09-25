
import { NavLink } from "react-router-dom";

const NavMenu = () => {
    return (

        <nav className="bg-transparent w-full absolute py-5 z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to='/' className="flex items-center">
                    <img src="/images/Logo.png" alt="Donation Campaign Logo" />
                </NavLink>
                <div>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="hidden w-full md:block md:w-auto md:bg-transparent bg-[#fafafa] rounded-xl justify-center items-center text-center" id="navbar-default">
                    <ul className="font-medium flex flex-col justify-end p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">

                        <li>
                            <NavLink to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "text-gray-400" : isActive ? "text-red-600 underline" : ""
                                }>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "text-gray-400" : isActive ? "text-red-600 underline" : ""
                                }>Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics"
                                className={
                                    ({ isActive, isPending }) =>
                                        isPending ? "text-gray-400" : isActive ? "text-red-600 underline" : ""
                                }>Statistics
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default NavMenu;