import React from 'react'

const authorityData = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Neutral Aggregator',
        description: "We don't compete with platforms.We aggregate and amplify — giving equal visibility to every listed restaurant.",
        gradient: 'from-indigo-500 to-violet-500',
        lightBg: 'bg-indigo-50',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514" />
            </svg>
        ),
        title: 'Marketing Amplifier',
        description: 'We invest in promoting the Cayman food scene — your restaurant benefits from our island-wide marketing campaigns.',
        gradient: 'from-rose-500 to-pink-500',
        lightBg: 'bg-rose-50',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
        title: 'Visibility Equalizer',
        description: 'Small or large, new or established — every restaurant gets a fair shot at being discovered by hungry customers.',
        gradient: 'from-teal-500 to-emerald-500',
        lightBg: 'bg-teal-50',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
        ),
        title: 'Partner-Friendly',
        description: 'We enhance — not replace — existing delivery platforms. Think of us as the discovery layer that drives more orders to everyone.',
        gradient: 'from-amber-500 to-orange-500',
        lightBg: 'bg-amber-50',
    },
]

const Authority = () => {
    return (
        <section id="authority" className="pt-16 md:pt-24 pb-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 section-pattern"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">Our Role</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        CayEats <span className="gradient-text">Enhances</span>- Not Replaces
                        <br className="hidden sm:block" />
                        Delivery Platforms
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        We're the missing layer between restaurants and customers — working alongside every delivery platform, not against them.
                    </p>
                </div>

                {/* Authority Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-8">
                    {authorityData.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex items-start gap-5 p-6 md:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                        >
                            {/* Decorative gradient blob */}
                            <div className={`absolute -right-12 -top-12 w-36 h-36 bg-gradient-to-br ${item.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>

                            {/* Icon */}
                            <div className={`flex-shrink-0 p-3.5 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}>
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-[15px]">{item.description}</p>
                            </div>

                            {/* Bottom accent */}
                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                    ))}
                </div>
                <div className='relative max-w-6xl mx-auto bg-gradient-to-r from-slate-400 to-slate-500 rounded-2xl p-8 md:p-10 text-center mb-4'>
                    <div className="text-center ">
                        <p className="text-xl md:text-[20px] font-bold text-white mb-1">
                            Industry studies consistently show: <span className="text-teal-300">~60-70% of customers try a new restaurant via online ordering.</span>
                        </p>
                        <p className="text--100 text-md text-center">(including data from the National Restaurant Association and major delivery platforms)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Authority