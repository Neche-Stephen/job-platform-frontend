export default function HowItWorks() {
  return (
    <section id="how" className="p-8 bg-yellow-400 text-black">
      <h3 className="text-2xl font-bold mb-4">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-5xl mb-2">1</div>
          <p>Create your profile</p>
        </div>
        <div className="text-center">
          <div className="text-5xl mb-2">2</div>
          <p>Post or apply for jobs</p>
        </div>
        <div className="text-center">
          <div className="text-5xl mb-2">3</div>
          <p>Connect and grow</p>
        </div>
      </div>
    </section>
  )
}
