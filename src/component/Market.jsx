import React from 'react'

const marketData = [
  {
    stat: '53%',
    title: 'Untapped Market',
    description: "The majority of Cayman restaurants still aren't offering delivery.That's a huge, untapped customer base waiting to be served — and whoever gets there first wins.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    gradient: 'from-rose-500 to-pink-600',
    barWidth: '53%',
    barColor: 'bg-gradient-to-r from-rose-500 to-pink-500',
  },
  {
    stat: 'Low',
    title: 'Poor Visibility',
    description: 'Very few restaurants are fully visible online. Customers order from who they can find, not who they prefer. You could be the best — and still get skipped.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
      </svg>
    ),
    gradient: 'from-amber-500 to-orange-600',
    barWidth: '25%',
    barColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
  },
  {
    stat: '10x',
    title: 'Gain Dominance',
    description: 'Early movers who solve the discovery problem will capture the market. Digital positioning compounds — the sooner you start, the harder it is for competitors to catch up.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    gradient: 'from-teal-500 to-emerald-600',
    barWidth: '85%',
    barColor: 'bg-gradient-to-r from-teal-500 to-emerald-500',
  },
]

const Market = () => {
  return (
    <section id="market" className="pt-16 md:pt-24 pb-4  bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 section-pattern"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">Market Opportunity</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The Market Is
            <span className="gradient-text"> Under-Served</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The data tells a clear story - there's a massive opportunity for restaurants willing to act now.
          </p>
        </div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-slate-100 transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Top gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}></div>

              {/* Icon */}
              <div className={`p-3.5 rounded-xl bg-gradient-to-br ${item.gradient} text-white w-fit mb-6 shadow-lg`}>
                {item.icon}
              </div>

              {/* Stat */}
              <div className="mb-4">
                <span className={`text-4xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.stat}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm mb-6 flex-grow">{item.description}</p>

              {/* Progress bar visual */}
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`${item.barColor} h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                  style={{ width: item.barWidth }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 md:mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl py-6 px-8 md:px-12 shadow-xl">
            <span className="text-3xl">📈</span>
            <p className="text-xl md:text-2xl font-bold text-white">
              "Digital positioning <span className="text-teal-400">compounds</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Market