import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Dummy data for circular metric (replace with real stats)
  const totalCustomers = 500;
  const satisfiedCustomers = 450;
  const dissatisfiedCustomers = 50;

  return (
    <div>
      {/* Responsive Hero Section */}
      <section
        className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero/hero-02.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-jayWhite p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Jaybash Customs</h1>
            <p className="text-lg md:text-xl">
              Your go-to stop for Premium Car Wraps & Mods, where passion meets craftsmanship. Step into a serene world of custom car wraps and performance mods, crafted with care to transform your ride into a personal masterpiece. Let the journey begin with a calm embrace of style and innovation.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-block bg-jayYellow text-jayBlack px-4 py-2 rounded hover:bg-jayWhite transition"
            >
              Learn More!
            </Link>
          </div>
        </div>
      </section>

      {/* Meet JayBash Section */}
      <section className="py-12 bg-jayBlack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-jayYellow text-center mb-8">
            Meet JayBash, Nigeria’s Automotive Sensation and brains behind Jaybash Customs
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/images/founder/founder-01.jpeg"
                alt="Jay, Founder of Jaybash Customs"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 text-jayWhite">
              <p className="text-lg">
                Jaybash, a motto head driven by pure adrenaline, founded Jaybash Customs to bring world-class elegance to the Automotive industry in Nigeria. With a passion for transforming rides, Jaybash’s vision is to make every car a masterpiece.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-block bg-jayYellow text-jayBlack px-6 py-2 rounded hover:bg-jayWhite transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-12 bg-jayGrey text-center">
        <h2 className="text-3xl font-bold text-jayYellow mb-8">Portfolio Preview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {['portfolio-01.jpg', 'portfolio-02.jpg', 'portfolio-03.jpg', 'portfolio-04.jpg'].map((img, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <Image
                src={`/images/portfolio/${img}`}
                alt={`Portfolio image ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <Link
          href="/portfolio"
          className="mt-4 inline-block bg-jayYellow text-jayBlack px-6 py-2 rounded hover:bg-jayWhite transition"
        >
          View Full Portfolio
        </Link>
      </section>

      {/* Circular Metric Analyzer */}
      <section className="py-12 bg-jayBlack text-center">
        <h2 className="text-3xl font-bold text-jayYellow mb-8">Our Performance</h2>
        <div className="flex justify-center gap-8">
          <div>
            <svg className="w-32 h-32" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#444"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#FFC107"
                strokeWidth="8"
                strokeDasharray={`${(satisfiedCustomers / totalCustomers) * 100} 100`}
                transform="rotate(-90 50 50)"
              />
              <text x="50" y="50" textAnchor="middle" dy="0.3em" className="text-jayWhite text-sm">
                {satisfiedCustomers}
              </text>
            </svg>
            <p className="text-jayWhite mt-2">Satisfied</p>
          </div>
          <div>
            <svg className="w-32 h-32" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#444"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#888"
                strokeWidth="8"
                strokeDasharray={`${(dissatisfiedCustomers / totalCustomers) * 100} 100`}
                transform="rotate(-90 50 50)"
              />
              <text x="50" y="50" textAnchor="middle" dy="0.3em" className="text-jayWhite text-sm">
                {dissatisfiedCustomers}
              </text>
            </svg>
            <p className="text-jayWhite mt-2">Dissatisfied</p>
          </div>
          <div>
            <p className="text-2xl text-jayWhite">{totalCustomers}</p>
            <p className="text-jayWhite">Total Customers</p>
          </div>
        </div>
      </section>

      {/* Instagram Reels Section (Placeholder) */}
      <section className="py-12 bg-jayGrey text-center">
        <h2 className="text-3xl font-bold text-jayYellow mb-8">Latest Reels from Jaybash Customs</h2>
        <div className="flex justify-center gap-4">
          {/* Placeholder for Instagram reels - Integrate Instagram API here */}
          <div className="w-64 h-36 bg-jayBlack text-jayWhite flex items-center justify-center rounded-lg">
            Reel 1 (API Integration Needed)
          </div>
          <div className="w-64 h-36 bg-jayBlack text-jayWhite flex items-center justify-center rounded-lg">
            Reel 2 (API Integration Needed)
          </div>
          <div className="w-64 h-36 bg-jayBlack text-jayWhite flex items-center justify-center rounded-lg">
            Reel 3 (API Integration Needed)
          </div>
        </div>
        <p className="text-jayWhite mt-4">
          *Note: Instagram API integration required. Use Instagram Basic Display API with an access token.
        </p>
      </section>

      {/* Drifting Classes Section */}
      <section className="py-12 bg-jayBlack text-center">
        <p className="text-jayWhite max-w-2xl mx-auto mb-6">
          Are you a passionate automotive person who wants to go sideways once in a while? Who is a better person to teach you than the drift King himself, Jaybash? Click the button below for more information. Who knows, you might just become the next drift king.
        </p>
        <Link
          href="/drifting-classes"
          className="bg-jayYellow text-jayBlack px-6 py-2 rounded hover:bg-jayWhite transition"
        >
          Learn to Drift
        </Link>
      </section>
    </div>
  );
}