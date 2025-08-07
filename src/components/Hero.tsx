import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="/images/hero-car.jpg"
        alt="Custom wrapped car by Jaybash Customs"
        fill
        className="object-cover brightness-50"
      />
      <div className="absolute text-center text-jayWhite">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Jaybash Customs
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Premium Car Wraps & Performance Mods in Abuja, Nigeria
        </p>
        <Link
          href="/booking"
          className="bg-jayYellow text-jayBlack px-8 py-3 rounded text-lg hover:bg-jayWhite transition"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}