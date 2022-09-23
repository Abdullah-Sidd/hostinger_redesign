import React from 'react'

const Domain = () => {
    return (
        <div>
            <section className="py-10 max-w-7xl bg-black mx-auto lg:px-8 2xl:rounded-xl lg:mt-6  sm:py-16 lg:py-24">
                <div data-aos="fade-down" className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className=" mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-cyan-500 sm:text-4xl lg:text-5xl">Find the perfect domain name</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed font-bold text-gray-600">Enter domain name of your choice and pick any extension name on the next step (choose between .in, .com, .online, .live, .store, .info and many more)</p>
                    </div>

                    <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
                        <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                            <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
                                <label htmlFor="email" className="sr-only"></label>
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    placeholder="Type Name of Domain You wish to"
                                    className="block w-full mb-2 px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                                    required
                                />
                            </div>

                            <a href="#_" className="relative  items-center justify-center inline-block ml-3 p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                </span>
                                <span className="relative text-white">Search Now</span>
                            </a>
                        </div>
                    </form>

                    <div className="flex items-center justify-center px-8 mt-8 sm:px-0">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="ml-2 text-sm text-gray-600 font-semibold"> Your data is complely secured with us. We don’t share with anyone. </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Domain