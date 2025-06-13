import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import PostJobForm from './components/PostJobForm'

export default function App() {
  const [showPostJob, setShowPostJob] = useState(false)

  return (
    <div>
      <Header onPostJobClick={() => setShowPostJob(true)} />
      {showPostJob ? (
        <PostJobForm onBack={() => setShowPostJob(false)} />
      ) : (
        <>
          <Hero />
          <About />
          <HowItWorks />
          <Benefits />
          <Footer />
        </>
      )}
    </div>
  )
}
