import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="p-4 h-screen max-w-screen-xl mx-auto bg-white grid md:grid-cols-2 grid-cols-1 justify-center items-center">
            <div className="max-md:order-2 max-md:text-center">
                <h2 className="text-5xl"><span className="text-7xl text-[#ffc727]">Sorry!!!</span><br />We Are Couldn&apos;t Find The Page.</h2>
                <p>
                    <NavLink className='px-6 py-4 bg-[#ffc727] text-xl font-medium inline-block mt-6 hover:bg-white text-black hover:border-2 border-2 border-transparent hover:border-black transition-all' to='/'>Go To Home</NavLink>
                </p>
            </div>
            <div className="text-center max-md:order-1">
                <img className="h-full w-full" src="/images/404.svg" alt="404 page not found image" />
            </div>
        </div>
    );
};

export default NotFound;