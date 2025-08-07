import Image from 'next/image';

export default function About() {
  return (
    <div className="relative w-screen min-h-screen py-10 bg-jayBlack">
      <Image
        src="/images/about/about-01.jpg"
        alt="About Jaybash Customs Background"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Overlay for contrast */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl font-bold text-jayYellow text-center mb-8">
          About Jaybash Customs
        </h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-jayWhite mb-4">
            Our Story
          </h2>
          <p className="text-jayWhite max-w-3xl mx-auto">
            Based in Abuja, Nigeria. Jaybash Customs is your go-to destination
            for premium car wraps and performance modifications. Inspired by
            Nigeria’s vibrant car culture, we transform vehicles into unique
            expressions of style and power. Our team of skilled artisans
            combines cutting-edge technology with a passion for automotive art
            to deliver unparalleled quality and service. Whether you want to
            enhance your car’s aesthetics or boost its performance, Jaybash Customs
            is here to make your automotive dreams a reality.
          </p>
        </section>
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-jayYellow text-center mb-4">
            Meet Jaybash, Our Founder
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/images/founder/founder-02.jpeg"
              alt="Jaybash, Founder"
              className="w-64 h-64 rounded-lg object-cover"
            />
            <div>
              <p className="text-jayWhite">
                Jaybash is a household name in Nigeria’s automotive scenes.
                With a lifelong passion for cars, he launched Jaybash Customs to
                bring world-class craftsmanship. His vision is to elevate
                every car into a masterpiece that reflects the owner’s personality. When he is not wrapping cars, You can catch him on the tracks 
                doing what he is publicly known for, Drifting.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-jayWhite mb-4">
            Ready to Transform Your Ride?
          </h2>
          <a
            href="/booking"
            className="bg-jayYellow text-jayBlack px-6 py-2 rounded hover:bg-jayWhite transition"
          >
            Book Now
          </a>
        </section>
      </div>
    </div>
  );
}