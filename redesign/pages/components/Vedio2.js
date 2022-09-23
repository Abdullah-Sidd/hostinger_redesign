import React from 'react'

const vedio2 = () => {
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
                                src="https://assets.hostinger.com/videos/homepage2020/simply-fast-websites-ad53591419.mp4"
                            />
                        </video>
                    </div>


                    <div className="flex flex-wrap  mt-auto mb-auto lg:w-1/2 sm:w-2/3 lg:ml-24 ">
                        <div className="w-full sm:p-4 px-4 mb-6">
                            <h1 className="title-font font-medium text-3xl mb-2 text-cyan-900 "><span className="border-b-4 border-pink-400">Lightning-Fast Web</span></h1>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2777.7K</h2>
                            <p className="leading-relaxed font-bold">Users</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">177.8K</h2>
                            <p className="leading-relaxed font-bold">Subscribes</p>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2 Million +</h2>
                            <p className="leading-relaxed font-bold">Downloads</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default vedio2