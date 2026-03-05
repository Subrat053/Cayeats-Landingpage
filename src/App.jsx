import React from 'react'
import Herosection from './component/Herosection'
import Navbar from './component/Navbar'
import ProblemSection from './component/ProblemSection'
import SolutionSection from './component/SolutionSection'
import Benefits from './component/Benefits'
import Market from './component/Market'
import HowItWork from './component/HowItWork'
import Restorant from './component/Restorant'
import FinalCTA from './component/FinalCTA'
import Authority from './component/Authority'
import CustomerBehavior from './component/CustomerBehavior'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Herosection />
      <ProblemSection />
      <CustomerBehavior />
      <SolutionSection />
      <Benefits />
      <Market />
      <HowItWork />
      <Restorant />
      <Authority />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App