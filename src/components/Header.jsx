import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-yellow-400">
      <Link to="/" className="text-2xl font-bold cursor-pointer">JobConnectSE</Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/browse" className="hover:underline">Browse Jobs</Link>
        <Link to="/post" className="hover:underline">Post a Job</Link>
      </nav>
    </header>
  )
}
