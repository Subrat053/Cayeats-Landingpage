import React from 'react'

const behaviors = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "They don't call.",
    description: 'Nobody picks up the phone anymore. Convenience is king — calling feels like friction from another era.',
    gradient: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "They don't compare.",
    description: "They open one app, scroll briefly, and pick from what's on screen. Your competitor is just a thumb-swipe away.",
    gradient: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'They choose in seconds.',
    description: "The average decision happens in under 3 seconds. If you're buried below the fold, you've already lost the order.",
    gradient: 'from-indigo-500 to-violet-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-violet-600',
  },
]

const CustomerBehavior = () => {
  return (
    <section id="behavior" className="pt-16 md:pt-24 pb-4 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">Customer Behavior</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Customers Aren't Searching.
            <br className="hidden sm:block" />
            <span className="gradient-text"> They're Scrolling.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Understanding how your customers actually find food is the key to getting more orders.
          </p>
        </div>

        {/* Behavior Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {behaviors.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col p-8 rounded-2xl border ${item.borderColor} ${item.bgColor} hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}
            >
              {/* Decorative gradient blob */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${item.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`}></div>

              <div className={`relative z-10 p-3.5 rounded-xl ${item.iconBg} text-white w-fit mb-6 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="relative z-10 text-slate-600 leading-relaxed text-[15px]">{item.description}</p>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-2xl py-6 px-8 md:px-12">
            <div className="hidden sm:block w-1 h-12 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
            <p className="text-xl md:text-2xl font-semibold text-slate-800 italic">
              "If you're not visible everywhere, you're <span className="text-teal-600 not-italic font-bold">invisible</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerBehavior