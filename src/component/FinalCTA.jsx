import React, { useState } from 'react'

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const contactApiUrl = `${(import.meta.env.VITE_API_BASE_URL || 'https://api.cayeats.online').replace(/\/$/, '')}/api/browse/contact`

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)
    const formElement = e.currentTarget

    const formData = new FormData(formElement)
    const payload = {
      restaurantName: formData.get('restaurantName')?.toString().trim() || '',
      name: formData.get('name')?.toString().trim() || '',
      phone: formData.get('phone')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || ''
    }

    try {
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        let errorMessage = 'Unable to submit your request right now. Please try again.'
        try {
          const errorData = await response.json()
          if (errorData?.message) {
            errorMessage = errorData.message
          }
        } catch {
          // Keep fallback message when the server does not return JSON.
        }
        throw new Error(errorMessage)
      }

      formElement.reset()
      setIsModalOpen(false)
      setIsSubmissionSuccess(true)
    } catch (error) {
      setSubmitError(error?.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
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

      <div className="relative max-w-5xl mx-auto py-16 md:py-28 px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl shadow-2xl shadow-teal-500/30 animate-pulse-glow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 md:mb-6 leading-tight">
          Ready to Increase
          <br />
          <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent animate-shimmer">
            Your Visibility?
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Join the growing network of Cayman restaurants that are being discovered by more customers every day. Listing is <span className="text-teal-300 font-semibold">completely free</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <button
            onClick={() => {
              setSubmitError('')
              setIsModalOpen(true)
            }}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-teal-500/30 cursor-pointer"
          >
            <span className="mr-2">Join CayEats</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
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
        <p className="mt-10 md:mt-12 text-sm sm:text-base text-slate-500 italic">
          "Once you're visible everywhere — your sales potential changes."
        </p>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => {
              if (isSubmitting) return
              setSubmitError('')
              setIsModalOpen(false)
            }}
          ></div>
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-fade-in-up">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-5 sm:p-8 text-white relative">
              <button 
                onClick={() => {
                  if (isSubmitting) return
                  setSubmitError('')
                  setIsModalOpen(false)
                }}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Join CayEats</h3>
              <p className="text-teal-50 text-xs sm:text-sm">Ready to grow? Fill out the details below and we'll get your restaurant listed.</p>
            </div>
            <form className="p-5 sm:p-8 space-y-3.5 sm:space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Restaurant Name</label>
                <input name="restaurantName" type="text" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-sm sm:text-base text-slate-800 font-medium placeholder:font-normal" placeholder="The Burger Shack" required disabled={isSubmitting} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Your Name</label>
                    <input name="name" type="text" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-sm sm:text-base text-slate-800" placeholder="John Doe" required disabled={isSubmitting} />
                </div>
                <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Phone</label>
                    <input name="phone" type="tel" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-sm sm:text-base text-slate-800" placeholder="+1 345 123-4567" required disabled={isSubmitting} />
                </div>
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Email Address</label>
                <input name="email" type="email" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-sm sm:text-base text-slate-800" placeholder="you@restaurant.com" required disabled={isSubmitting} />
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Message or Questions (Optional)</label>
                <textarea name="message" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-sm sm:text-base text-slate-800 font-medium placeholder:font-normal" placeholder="Anything else we should know?" rows={3} disabled={isSubmitting}></textarea>
              </div>
              {submitError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl p-3">
                  {submitError}
                </p>
              )}
              <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm sm:text-base font-bold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 mt-2">
                {isSubmitting ? 'Sending...' : 'Send Application'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSubmissionSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsSubmissionSuccess(false)}
          ></div>
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all animate-fade-in-up text-center p-6 sm:p-8 md:p-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full shadow-lg shadow-teal-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>
            {/* Content */}
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Your Request Has Been Accepted</h3>
            <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8">
                Thank you for contacting us. We've received your application and will get back to you shortly.
            </p>
            {/* Close Button */}
            <button
                onClick={() => setIsSubmissionSuccess(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-sm sm:text-base text-slate-700 font-bold py-3 rounded-xl transition-all"
            >
                Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default FinalCTA