import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import PostJobForm from './components/PostJobForm'
import BrowseJobs from './components/BrowseJobs'
import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseJobs />} />
        <Route path="/post" element={<PostJobForm />} />
      </Routes>
    </div>
  )
}
