import React from 'react'

const Herosection = () => {
  return (
    <div id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Floating Food Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[15%] left-[10%] text-6xl animate-float opacity-20">🍕</span>
        <span className="absolute top-[25%] right-[12%] text-5xl animate-float-delayed opacity-20" style={{ animationDelay: '1s' }}>🍔</span>
        <span className="absolute bottom-[30%] left-[15%] text-5xl animate-float opacity-15" style={{ animationDelay: '2s' }}>🌮</span>
        <span className="absolute bottom-[20%] right-[18%] text-6xl animate-float-delayed opacity-15" style={{ animationDelay: '0.5s' }}>🍜</span>
        <span className="absolute top-[45%] left-[5%] text-4xl animate-float opacity-10" style={{ animationDelay: '1.5s' }}>🥗</span>
        <span className="absolute top-[35%] right-[5%] text-4xl animate-float-delayed opacity-10" style={{ animationDelay: '3s' }}>🍣</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 sm:px-6 lg:px-8 pt-20">
        {/* Badge */}
        <div className="animate-fade-in-down mb-8">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium py-2 px-5 rounded-full">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
            Now Live in Cayman Islands
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] mb-6 tracking-tight max-w-6xl">
          Cayman Restaurants Are
          <br />
          <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Leaving Money
          </span>
          <br />
          on the Table.
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up text-lg sm:text-xl md:text-2xl font-medium mb-4 text-teal-200 max-w-3xl" style={{ animationDelay: '0.2s' }}>
          CayEats — Food Delivery Visibility, Simplified.
        </p>

        {/* Description */}
        <p className="animate-fade-in-up text-base sm:text-lg md:text-xl max-w-2xl mb-10 text-slate-300 font-light leading-relaxed" style={{ animationDelay: '0.4s' }}>
          Customers are ordering online. The question is — are they finding <span className="text-white font-medium">you</span>?
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.6s' }}>
          <a
            href="#join"
            className="group relative bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-2xl shadow-teal-500/30 hover:shadow-teal-400/40 text-lg"
          >
            <span className="relative z-10">Get Listed</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </a>
          <a
            href="#how-it-works"
            className="bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 ease-in-out hover:shadow-2xl text-lg"
          >
            Learn How It Works
          </a>
        </div>

        {/* Trust Badges */}
        <div className="animate-fade-in-up mt-13 mb-6 flex flex-wrap justify-center gap-6 sm:gap-10" style={{ animationDelay: '0.8s' }}>
          {[
            { num: '100+', label: 'Restaurants' },
            { num: '20K+', label: 'Monthly Visitors' },
            { num: '2', label: 'Delivery Platforms' },
          ].map((badge, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">{badge.num}</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection