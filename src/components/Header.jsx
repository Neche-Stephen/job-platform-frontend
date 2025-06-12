export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-yellow-400">
      <h1 className="text-2xl font-bold">JobConnectSE</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#how" className="hover:underline">How It Works</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="#signin" className="hover:underline">Sign In</a>
        <a href="#signup" className="hover:underline">Sign Up</a>
      </nav>
    </header>
  )
}
