import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="text-center py-20 bg-yellow-400 text-black">
      <h2 className="text-4xl font-bold mb-4">Connecting Southeast Nigeria’s Companies with Tech Talent from south east</h2>
      <p className="mb-6">Find the right opportunities or candidates in one place.</p>
      <div className="space-x-4">
        <button onClick={() => navigate('/post')} className="bg-black text-yellow-400 px-4 py-2 rounded">Post a Job</button>
        <button onClick={() => navigate('/browse')} className="bg-black text-yellow-400 px-4 py-2 rounded">Find a Job</button>
      </div>
    </section>
  )
}
