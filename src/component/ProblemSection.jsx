import React, { useState, useEffect, useRef } from 'react'

const AnimatedCounter = ({ target, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const numTarget = parseInt(target)
    if (isNaN(numTarget)) {
      setCount(target)
      return
    }
    let start = 0
    const duration = 2000
    const increment = numTarget / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= numTarget) {
        setCount(numTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{typeof count === 'number' ? count : target}{suffix}
    </span>
  )
}

const stats = [
  {
    value: '47',
    suffix: '%',
    label: 'of restaurants offer delivery — but most are invisible online.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    gradient: 'from-teal-500 to-emerald-500',
    bgGradient: 'from-teal-500/10 to-emerald-500/10',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
  },
  {
    value: '30',
    prefix: '~',
    suffix: '',
    label: 'restaurants are visible across both major delivery platforms.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-violet-500',
    bgGradient: 'from-indigo-500/10 to-violet-500/10',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
  },
  {
    value: '3',
    suffix: 's',
    label: 'is all it takes for a customer to choose — or skip — your restaurant.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-500/10 to-orange-500/10',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
  },
]

const ProblemSection = () => {
  return (
    <section id="problem" className="pb-4 pt-16 md:pt-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 section-pattern"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">The Problem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Restaurants Are Losing Orders
            <br className="hidden sm:block" />
            <span className="gradient-text"> Every Single Day</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The Cayman Islands food scene is booming — but digital visibility hasn't kept up.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${stat.image}')` }}
              ></div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/40"></div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col items-center text-center min-h-[280px] justify-center">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white mb-6 shadow-lg`}>
                  {stat.icon}
                </div>
                <h3 className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />
                </h3>
                <p className="text-base text-slate-200 leading-relaxed max-w-xs">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center">
          <div className="inline-block relative">
            <div className="absolute -left-2 -top-4 text-6xl text-teal-200 font-serif">"</div>
            <p className="text-2xl md:text-3xl font-bold text-slate-800 italic px-8">
              If they don't see you, they order from someone else.
            </p>
            <div className="absolute -right-2 -top-4 text-6xl text-teal-200 font-serif">"</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection