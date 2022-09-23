import React from 'react'

const Vedio4 = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div data-aos="fade-down" className="container px-5  mx-auto flex flex-wrap">

                    <div className="lg:w-2/2 sm:w-1/3 rounded-lg  mt-6 sm:mt-0">
                        <video
                            autoPlay
                            loop
                            muted
                        >
                            <source
                                src="https://assets.hostinger.com/videos/homepage2020/chat-support-24-7-f281e75a32.mp4"
                            />
                        </video>
                    </div>


                    <div className="flex flex-wrap  mt-auto mb-auto lg:w-1/2 sm:w-2/3 lg:ml-24 ">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-medium text-4xl mb-2 text-cyan-900 "><span className="border-b-4 border-pink-400">24/7 Support</span></h1>
                            <div className="leading-relaxed font-bold ">Our team of experts will solve technical issues to get your websites up and running. Anytime.</div>
                        </div>
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
                </div>

            </section>
        </div>
    )
}

export default Vedio4