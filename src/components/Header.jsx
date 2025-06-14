export default function Header({ onPostJobClick, onBrowseJobsClick, onHomeClick }) {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-yellow-400">
      <h1 onClick={onHomeClick} className="text-2xl font-bold cursor-pointer">JobConnectSE</h1>
      <nav className="space-x-4">
        <button onClick={onHomeClick} className="hover:underline">Home</button>
        <button onClick={onBrowseJobsClick} className="hover:underline">Browse Jobs</button>
        <button onClick={onPostJobClick} className="hover:underline">Post a Job</button>
      </nav>
    </header>
  )
}
