import React from 'react'

const benefitsData = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
        title: 'Increased Visibility',
        description: 'Be seen by every potential customer, regardless of which delivery partner they prefer. Your restaurant appears across all platforms.',
        gradient: 'from-teal-500 to-emerald-500',
        lightBg: 'bg-teal-50',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'No Operational Changes',
        description: 'Keep your current delivery setup exactly as it is. We work around you, not the other way around. Zero disruption, maximum impact.',
        gradient: 'from-indigo-500 to-violet-500',
        lightBg: 'bg-indigo-50',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        title: 'Capture Lost Sales',
        description: "Reach customers who are using platforms you're not on.Every missed platform is a missed order - we fix that.",
        gradient: 'from-amber-500 to-orange-500',
        lightBg: 'bg-amber-50',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514" />
            </svg>
        ),
        title: 'Free Marketing Layer',
        description: 'We actively promote categories, daily specials, cuisines, and featured restaurants bringing new customers to your door, free of charge.',
        gradient: 'from-rose-500 to-pink-500',
        lightBg: 'bg-rose-50',
    },
]

const Benefits = () => {
    return (
        <section id="benefits" className="pt-16 md:pt-24 pb-4 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">Benefits</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Why Restaurants
                        <span className="gradient-text"> Join CayEats</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Everything you need to grow your delivery presence with zero operational overhead.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {benefitsData.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Top gradient accent line */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                            {/* Icon */}
                            <div className={`p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {benefit.icon}
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4 md:mt-8 mb-2">
                    <div className="inline-flex  items-center gap-4 bg-gradient-to-r from-slate-600 to-slate-800 rounded-2xl py-6 px-8 md:px-12 shadow-xl">
                        <p className="text-xl md:text-2xl font-bold text-white">
                            "Customers who first discover a brand digitally are more likely to become repeat buyers. <span className="text-teal-400"></span>"
                        </p>
                    </div>
                    {/* Customers who first discover a brand digitally are more likely to become repeat buyers. */}
                </div>
            </div>
        </section>
    )
}

export default Benefits