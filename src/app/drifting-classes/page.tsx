export default function DriftingClasses() {
  return (
    <div className="py-12 bg-jayBlack min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-jayYellow text-center mb-8">
          Drifting Classes with Jaybash
        </h1>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-jayWhite mb-4">
            Master the Art of Drifting
          </h2>
          <p className="text-jayWhite max-w-3xl mx-auto text-center mb-6">
            Learn from Jaybash, Nigeria’s Drift King, at our state-of-the-art training tracks designed to simulate real drift scenarios. Our classes cater to all levels, from beginners to drift kings, with hands-on experience in drift-prepped cars.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-jayGrey p-6 rounded-lg text-center">
            <img
              src="/images/drifting-classes/class-01.jpg"
              alt="Beginner Drifting Class"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-jayYellow mb-2">
              Beginner Class
            </h3>
            <p className="text-jayWhite mb-4">
              Perfect for those starting out. Use your own car or ours to master controlled slides and fundamentals of car control.
            </p>
          </div>
          <div className="bg-jayGrey p-6 rounded-lg text-center">
            <img
              src="/images/drifting-classes/class-02.jpg"
              alt="Skilled Drifting Class"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-jayYellow mb-2">
              Skilled Class
            </h3>
            <p className="text-jayWhite mb-4">
              For those with experience, refine your control, style, and fluidity in drift sequences with our expert guidance.
            </p>
          </div>
          <div className="bg-jayGrey p-6 rounded-lg text-center">
            <img
              src="/images/drifting-classes/class-03.jpg"
              alt="Master Drifting Class"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-jayYellow mb-2">
              Master Class
            </h3>
            <p className="text-jayWhite mb-4">
              For drift elites, push boundaries with turbocharged cars, mastering precision and innovation under Jaybash’s mentorship.
            </p>
          </div>
        </section>
        <section className="text-center">
          <p className="text-jayWhite max-w-2xl mx-auto mb-6">
            Our seasoned instructors provide personalized coaching, using well-maintained drift cars with roll cages and upgraded suspensions. Maximize your driving time to build confidence and skills.
          </p>
          <a
            href="/booking"
            className="bg-jayYellow text-jayBlack px-6 py-2 rounded hover:bg-jayWhite transition"
          >
            Book Your Class
          </a>
        </section>
      </div>
    </div>
  );
}