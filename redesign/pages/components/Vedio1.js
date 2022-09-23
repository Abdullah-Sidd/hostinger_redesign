import React from 'react'

const Vedio1 = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div data-aos="fade-down" className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-900"><span className="border-b-4 border-pink-400">Easy To Set Up</span></h1>
                        <p className="mb-8 leading-relaxed font-bold">Getting your website live is as simple as a click of a button. Everything you need - provided in a clear way.</p>
                        <div className="flex w-full md:justify-start justify-center items-end">
                            <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Learn More</span>
                            </button>
                        </div>
                        <div className="flex lg:flex-row md:flex-col">
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <video
                            autoPlay
                            muted
                        >
                            <source
                                src="https://assets.hostinger.com/videos/homepage2020/easy-to-set-up-6e4616539f.mp4"
                            />
                        </video>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Vedio1