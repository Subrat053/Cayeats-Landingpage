import React from 'react'

const oldWayItems = [
    { icon: '📱', label: 'Platform A', desc: 'Limited reach' },
    { icon: '📲', label: 'Platform B', desc: 'Different audience' },
    { icon: '🔍', label: 'Google Search', desc: 'Low rankings' },
    { icon: '📷', label: 'Instagram DMs', desc: 'Not scalable' },
]

const SolutionSection = () => {
    return (
        <section id="solution" className="pt-16 md:pt-24 pb-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-12">
                    <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">The Solution</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        What Makes CayEats
                        <span className="gradient-text"> Different</span>
                    </h2>
                </div>

                {/* Subheading */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                        CayEats is not another delivery company.
                        <br />
                        It is the <span className="font-semibold text-teal-600">central discovery hub</span> for Cayman food delivery.
                    </p>
                </div>

                {/* Before / After Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Before Column — The Old Way */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 to-orange-200 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-slate-100 h-full">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-rose-100 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-rose-500">Without CayEats</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">The Old Way: A Maze</h3>
                            <p className="text-slate-500 mb-8 text-sm">Customers jump between fragmented platforms, often giving up before finding you.</p>

                            <div className="grid grid-cols-2 gap-3">
                                {oldWayItems.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors duration-300">
                                        <span className="text-3xl mb-2">{item.icon}</span>
                                        <p className="font-semibold text-slate-700 text-center text-sm">{item.label}</p>
                                        <p className="text-xs text-slate-400 mt-1 text-center">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Confusion Visual */}
                            <div className="mt-6 p-4 bg-rose-50 rounded-xl border border-rose-100 text-center">
                                <p className="text-rose-600 font-medium text-sm">😵 Customers get confused and give up</p>
                            </div>
                        </div>
                    </div>

                    {/* After Column — The CayEats Way */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative p-8 md:p-10 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-lg border border-teal-100 h-full">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-teal-100 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-teal-600">With CayEats</span>
                            </div>
                            <h3 className="text-2xl font-bold text-teal-800 mb-2">The CayEats Way: A Direct Path</h3>
                            <p className="text-slate-600 mb-8 text-sm">One destination. Every restaurant. A single place for customers to find you.</p>

                            {/* Flow diagram */}
                            <div className="flex flex-col items-center space-y-4">
                                {/* Customer */}
                                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border border-teal-100 w-full max-w-xs">
                                    <div className="p-2 bg-slate-100 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800 text-sm">Hungry Customer</p>
                                        <p className="text-xs text-slate-400">"I want food delivered"</p>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="flex flex-col items-center">
                                    <div className="w-0.5 h-6 bg-gradient-to-b from-teal-300 to-teal-500"></div>
                                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                                </div>

                                {/* CayEats Hub */}
                                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-4 rounded-xl shadow-lg text-white w-full max-w-xs text-center animate-pulse-glow">
                                    <div className="flex items-center justify-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <p className="font-bold text-lg">CayEats Hub</p>
                                    </div>
                                    <p className="text-teal-100 text-xs mt-1">One search. All options.</p>
                                </div>

                                {/* Arrow */}
                                <div className="flex flex-col items-center">
                                    <div className="w-0.5 h-6 bg-gradient-to-b from-teal-500 to-indigo-500"></div>
                                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 16l-6-6h12l-6 6z" /></svg>
                                </div>

                                {/* Your Restaurant */}
                                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md border-2 border-teal-200 w-full max-w-xs">
                                    <div className="p-2 bg-indigo-100 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800 text-sm">YOUR Restaurant</p>
                                        <p className="text-xs text-teal-600 font-medium">Direct orders & visibility ✨</p>
                                    </div>
                                </div>
                            </div>

                            {/* Success Visual */}
                            <div className="mt-6 p-4 bg-teal-100/60 rounded-xl border border-teal-200 text-center">
                                <p className="text-teal-700 font-medium text-sm">✅ Customers find you easily — and order!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolutionSection
