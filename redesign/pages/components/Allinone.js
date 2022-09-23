import React from 'react'
const Allinone = () => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div data-aos="fade-down" className="container px-5 py-15 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-32 mb-6 lg:mb-0 mt-12  ">
                            <div className="flex mb-4 ">
                                <h1 className=" text-4xl text-indigo-500 border-b-2 border-indigo-500 py-2 font-bold  px-1">All-In-One Web Hosting</h1>
                            </div>
                            <p className="leading-relaxed mb-4 text-cyan-700 font-semibold text-lg">We prepared the best web hosting plan for you to start. You will be able to adjust plans as you go - our custom-built algorithm will provide suggestions based on your usage.</p>
                            <div className="flex">
                                <a className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Get Started</span>
                                </a>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <img alt='' className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://sm8uti.github.io/Hostinger-Redesign-Website/assets/vector/iMac.svg" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Allinone