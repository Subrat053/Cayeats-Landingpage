import React from 'react'

const stepsData = [
    {
        number: '01',
        title: 'Get on a Platform',
        description: "Already using a delivery app? Perfect. If not, we'll help you get started with a trusted partner in the Cayman Islands.",
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop',
        gradient: 'from-teal-500 to-emerald-500',
    },
    {
        number: '02',
        title: 'List on CayEats',
        description: 'Add your restaurant to the CayEats directory. Include your menu, photos, delivery info — all in under 10 minutes. It\'s free.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop',
        gradient: 'from-indigo-500 to-violet-500',
    },
    {
        number: '03',
        title: 'Get Discovered',
        description: 'Customers find you through our centralized hub. When they\'re hungry and scrolling, you\'re front and center — everywhere they look.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop',
        gradient: 'from-amber-500 to-orange-500',
    },
]

const HowItWork = () => {
    return (
        <section id="how-it-works" className="pt-16 md:pt-24 pb-4 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-10">
                    <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">How It Works</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Three Simple Steps to
                        <span className="gradient-text"> Get Found</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        No disruption. No complicated onboarding. Just visibility.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Desktop connecting line */}
                    <div className="hidden md:block absolute top-[140px] left-[16%] right-[16%] h-0.5">
                        <div className="w-full h-full bg-gradient-to-r from-teal-300 via-indigo-300 to-amber-300 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                        {stepsData.map((step, index) => (
                            <div key={index} className="group flex flex-col items-center text-center">
                                {/* Step Number */}
                                <div className="relative z-10 mb-8">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                                        <span className="text-2xl font-black text-white">{step.number}</span>
                                    </div>
                                    {/* Glow effect */}
                                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-linear-to-br ${step.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
                                </div>

                                {/* Image */}
                                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linearto-t from-slate-900/30 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-[15px] max-w-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className="text-center mt-16 md:mt-20 mb-4">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-2xl py-5 px-8 md:px-12">
                        <span className="text-2xl">⚡</span>
                        <p className="text-lg md:text-xl font-semibold text-slate-800 italic">
                            "For many customers, delivery or takeout is their first interaction with a restaurant. <span className="text-teal-600 not-italic font-bold">Just visibility.</span>"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork