import React from 'react'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Extend Beyond Physical Tables',
    description: 'Your kitchen has capacity. Your dining room has limits. Delivery removes the ceiling on your revenue potential.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Turn Slow Nights Into Revenue',
    description: 'Monday evening feeling quiet? Delivery orders fill the gaps — turning your slowest hours into profitable ones.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Build Island-Wide Brand Recognition',
    description: 'People who never walk past your door will discover your food. That\'s the power of digital visibility across the entire Cayman Islands.',
  },
]

const Restorant = () => {
  return (
    <section id="restaurants" className="pt-16 md:pt-24 pb-4 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">For New Restaurants</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Not Offering Delivery Yet?
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent"> This Is Your Moment.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            53% of Cayman restaurants haven't started delivery. Be among the first to capture this massive opportunity.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/0 to-emerald-500/0 group-hover:from-teal-500/5 group-hover:to-emerald-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white w-fit mb-6 shadow-lg shadow-teal-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-[15px]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative group mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 md:p-10 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 ">
              <div className="p-3 bg-white/20 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl md:text-2xl font-bold text-white mb-1">
                  CayEats can connect you with trusted delivery partners.
                </p>
                <p className="text-teal-100 text-sm">No fees. No tech changes. Just an introduction to get you started.</p>
              </div>
              <a href="#join" className="flex-shrink-0 bg-white text-teal-700 font-bold py-3 px-8 rounded-full hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Restorant