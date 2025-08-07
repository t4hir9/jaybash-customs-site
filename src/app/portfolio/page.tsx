export default function Portfolio() {
  return (
    <div className="py-12 bg-jayBlack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-jayYellow text-center mb-8">
          Our Portfolio
        </h1>
        <p className="text-jayWhite text-center mb-12">
          Explore our collection of stunning car wraps and modifications that showcase our craftsmanship and creativity.
           Each project reflects our commitment to quality and innovation in the automotive industry.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
  {Array.from({ length: 15 }, (_, i) => (
    <div key={i} className="relative overflow-hidden rounded-lg">
      <img
        src={`/images/portfolio/portfolio-${(i + 1).toString().padStart(2, '0')}.jpg`}
        alt={`Portfolio image ${i + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
<section className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-jayWhite mb-4">
            Impressive right? Book Your Slot with us today!
          </h3>
          <a
            href="/booking"
            className="bg-jayYellow text-jayBlack px-6 py-2 rounded hover:bg-jayWhite transition"
          >
            Save Your Slot.
          </a>
        </section>
      </div>
    </div>
  );
}