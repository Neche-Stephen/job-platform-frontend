import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import PostJobForm from './components/PostJobForm'
import BrowseJobs from './components/BrowseJobs'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div>
      <Header
        onPostJobClick={() => setPage('post')}
        onBrowseJobsClick={() => setPage('browse')}
        onHomeClick={() => setPage('home')}
      />

      {page === 'post' && <PostJobForm onBack={() => setPage('home')} />}
      {page === 'browse' && <BrowseJobs />}
      {page === 'home' && (
        <>
          <Hero
            onPostJob={() => setPage('post')}
            onFindJob={() => setPage('browse')}
          />
          <About />
          <HowItWorks />
          <Benefits />
          <Footer />
        </>
      )}
    </div>
  )
}
