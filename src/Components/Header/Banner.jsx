const Banner = () => {
    return (

        <section className="bg-[url('/images/Banner.png')] py-36 bg-stone-200 bg-blend-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 ">
                
                
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">I Grow By Helping People In Need</h1>
                
                <form className="w-full max-w-md mx-auto md:space-y-16 space-y-10">
                    <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
                    <div className="relative">
                        
                        <input type="email" id="default-email" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-xl bg-white focus:ring-red-300 focus:border-red-300 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300" placeholder="Search here...." />
                            <button type="submit" className="text-white absolute right-0 bottom-0 bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-e-xl text-sm h-full px-5 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-600">Sign up</button>
                    </div>
                </form>
            </div>
            
        </section>

    );
};

export default Banner;