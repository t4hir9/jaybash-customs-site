'use client'; // Mark this file as a Client Component

import { useState } from 'react';

export default function Booking() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [details, setDetails] = useState('');
  const [wrapTypes, setWrapTypes] = useState<string[]>([]);
  const [detailingOptions, setDetailingOptions] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [customizations, setCustomizations] = useState<string[]>([]);
  const [carModel, setCarModel] = useState('');
  const [originalColor, setOriginalColor] = useState('');
  const [wrapExtent, setWrapExtent] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [date, setDate] = useState('');

  const handleBookingSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const bookingDetails = {
      name,
      email,
      phone,
      serviceType,
      details,
      wrapTypes,
      detailingOptions,
      colors,
      customizations,
      carModel,
      originalColor,
      wrapExtent,
      specialRequest,
      date,
    };

    const response = await fetch('/api/sendBookingPDF', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingDetails),
    });

    if (response.ok) {
      alert('Booking details sent to your email as a PDF!');
    } else {
      alert('Failed to send booking details. Please try again.');
    }
  };

  return (
    <div className="py-12 bg-jayBlack min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-jayYellow text-center mb-8">
          Book Your Service
        </h1>
        <form onSubmit={handleBookingSubmit} className="max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-jayWhite mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-2 rounded bg-jayGrey text-jayWhite"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-jayWhite mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-2 rounded bg-jayGrey text-jayWhite"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-jayWhite mb-2">Your Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone"
              className="w-full p-2 rounded bg-jayGrey text-jayWhite"
              required
            />
          </div>
          <div>
            <label htmlFor="serviceType" className="block text-jayWhite mb-2">What would you like to book?</label>
            <select
              id="serviceType"
              name="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full p-2 rounded bg-jayGrey text-jayWhite"
              required
            >
              <option value="">Select an option</option>
              <option value="drifting">Drifting Classes</option>
              <option value="wrap">Car Wrap & Customization</option>
            </select>
          </div>

          {serviceType === 'drifting' && (
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-jayYellow mb-4">Drifting Class Offers</h2>
              <div className="space-y-4">
                <label className="block text-jayWhite">
                  <input
                    type="radio"
                    name="driftingOffer"
                    value="beginner"
                    className="mr-2"
                    onChange={(e) => setDetails(e.target.value)}
                  />
                  Beginner Class - 2 hours, includes car
                </label>
                <label className="block text-jayWhite">
                  <input
                    type="radio"
                    name="driftingOffer"
                    value="skilled"
                    className="mr-2"
                    onChange={(e) => setDetails(e.target.value)}
                  />
                  Skilled Class - 3 hours, advanced techniques
                </label>
                <label className="block text-jayWhite">
                  <input
                    type="radio"
                    name="driftingOffer"
                    value="master"
                    className="mr-2"
                    onChange={(e) => setDetails(e.target.value)}
                  />
                  Master Class - 4 hours, turbocharged cars
                </label>
              </div>
              <label htmlFor="date" className="block text-jayWhite mt-4 mb-2">Select Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 rounded bg-jayGrey text-jayWhite"
                required
              />
            </div>
          )}

          {serviceType === 'wrap' && (
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-jayYellow mb-4">Car Wrap & Customization</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="wrapTypes" className="block text-jayWhite mb-2">Wrap Types (Select one or more)</label>
                  <div className="flex space-x-4">
                    {['Matte', 'Gloss', 'Chrome'].map((type) => (
                      <label key={type} className="text-jayWhite">
                        <input
                          type="checkbox"
                          value={type}
                          checked={wrapTypes.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) setWrapTypes([...wrapTypes, type]);
                            else setWrapTypes(wrapTypes.filter((t) => t !== type));
                          }}
                          className="mr-2"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="detailingOptions" className="block text-jayWhite mb-2">Detailing Options (Select one or more)</label>
                  <div className="flex flex-wrap space-x-4">
                    {['PPFs', 'Tints', 'Paint Correction', 'Ceramic Coating', 'Polishing'].map((option) => (
                      <label key={option} className="text-jayWhite">
                        <input
                          type="checkbox"
                          value={option}
                          checked={detailingOptions.includes(option)}
                          onChange={(e) => {
                            if (e.target.checked) setDetailingOptions([...detailingOptions, option]);
                            else setDetailingOptions(detailingOptions.filter((o) => o !== option));
                          }}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="colors" className="block text-jayWhite mb-2">Colors (Select one or more)</label>
                  <div className="flex flex-wrap space-x-4">
                    {[
                      'Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Gold', 'Bronze',
                      'Pink', 'Teal', 'Navy', 'Maroon', 'Turquoise', 'Lime', 'Indigo', 'Violet',
                    ].map((color) => (
                      <label key={color} className="text-jayWhite">
                        <input
                          type="checkbox"
                          value={color}
                          checked={colors.includes(color)}
                          onChange={(e) => {
                            if (e.target.checked) setColors([...colors, color]);
                            else setColors(colors.filter((c) => c !== color));
                          }}
                          className="mr-2"
                        />
                        {color}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="customizations" className="block text-jayWhite mb-2">Customizations (Select one or more)</label>
                  <div className="flex flex-wrap space-x-4">
                    {['Tunes', 'Downpipes', 'Intercoolers', 'Turbos', 'Exhaust Systems', 'Lowering Springs', 'Spoilers'].map((mod) => (
                      <label key={mod} className="text-jayWhite">
                        <input
                          type="checkbox"
                          value={mod}
                          checked={customizations.includes(mod)}
                          onChange={(e) => {
                            if (e.target.checked) setCustomizations([...customizations, mod]);
                            else setCustomizations(customizations.filter((m) => m !== mod));
                          }}
                          className="mr-2"
                        />
                        {mod}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="carModel" className="block text-jayWhite mb-2">Car Model</label>
                  <select
                    id="carModel"
                    name="carModel"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="w-full p-2 rounded bg-jayGrey text-jayWhite"
                  >
                    <option value="">Select your car</option>
                    <option value="bmw">BMW</option>
                    <option value="camaro">Chevrolet Camaro</option>
                    <option value="dodge-challenger">Dodge Challenger</option>
                    <option value="ford-mustang">Ford Mustang</option>
                    <option value="honda-accord">Honda Accord</option>
                    <option value="lexus">Lexus</option>
                    <option value="mercedes-benz-Sclass">Mercedes-Benz S-Class</option>
                    <option value="mercedes-benz_maybach">Mercedes-Benz Maybach</option>
                    <option value="mercedes-Eclass">Mercedes-Benz E-Class</option>
                    <option value="mercedes-benz-Gwagon">Mercedes-Benz G-Wagon</option>
                    <option value="mini-cooper">Mini Cooper</option>
                    <option value="toyota-gt86">Toyota GT86</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="originalColor" className="block text-jayWhite mb-2">Original Car Color</label>
                  <input
                    type="text"
                    id="originalColor"
                    name="originalColor"
                    value={originalColor}
                    onChange={(e) => setOriginalColor(e.target.value)}
                    className="w-full p-2 rounded bg-jayGrey text-jayWhite"
                    placeholder="Enter original color (e.g., Silver)"
                  />
                </div>
                <div>
                  <label htmlFor="wrapExtent" className="block text-jayWhite mb-2">Wrap Extent</label>
                  <select
                    id="wrapExtent"
                    name="wrapExtent"
                    value={wrapExtent}
                    onChange={(e) => setWrapExtent(e.target.value)}
                    className="w-full p-2 rounded bg-jayGrey text-jayWhite"
                  >
                    <option value="">Select extent</option>
                    <option value="full">Full Wrap</option>
                    <option value="half">Half Wrap</option>
                    <option value="quarter">Quarter Wrap</option>
                    <option value="part">Part Wrap</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="specialRequest" className="block text-jayWhite mb-2">Special Customization Request</label>
                  <textarea
                    id="specialRequest"
                    name="specialRequest"
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full p-2 rounded bg-jayGrey text-jayWhite"
                    placeholder="Describe any special customizations not listed..."
                  />
                </div>
              </div>
            </div>
          )}

          {serviceType && (
            <button
              type="submit"
              className="w-full bg-jayYellow text-jayBlack px-4 py-2 rounded hover:bg-jayWhite transition"
            >
              Submit Booking
            </button>
          )}
        </form>
      </div>
    </div>
  );
}