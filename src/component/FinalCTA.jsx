import React from 'react'

const FinalCTA = () => {
  return (
    <section id="join" className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 animate-gradient"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Glow effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto pt-16 md:pt-24 pb-4 px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl shadow-2xl shadow-teal-500/30 animate-pulse-glow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          Ready to Increase
          <br />
          <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent animate-shimmer">
            Your Visibility?
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join the growing network of Cayman restaurants that are being discovered by more customers every day. Listing is <span className="text-teal-300 font-semibold">completely free</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <a
            href="#join"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-teal-500/30"
          >
            <span className="mr-2">Join CayEats</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          {/* <a
            href="#book"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:shadow-2xl"
          >
            Book a Call
          </a> */}
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            No fees
          </span>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Setup in 10 minutes
          </span>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            No contracts
          </span>
        </div>

        {/* Bottom tagline */}
        <p className="my-4 text-base text-gray-200 italic">
          "Online ordering isn't replacing dine-in - it's introducing new customers to your restaurant."
        </p>
      </div>
    </section>
  )
}

export default FinalCTA