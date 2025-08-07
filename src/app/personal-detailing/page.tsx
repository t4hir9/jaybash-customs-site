'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaCar, FaPaintRoller, FaWrench } from 'react-icons/fa';
import ThreeJSCarViewer from '@/components/ThreeJSCarViewer';

export default function PersonalDetailing() {
  const [carModel, setCarModel] = useState('bmw');
  const [wrapColor, setWrapColor] = useState('Matte Black');
  const [mod, setMod] = useState('None');
  const [showModal, setShowModal] = useState(false);

  const handleSaveDesign = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="py-12 bg-jayBlack min-h-screen">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl font-bold text-jayYellow text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Design Your Dream Car
        </motion.h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="lg:w-2/3 h-[500px] bg-jayGrey rounded-lg overflow-hidden relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ThreeJSCarViewer carModel={carModel} wrapColor={wrapColor} />
            {/* Fallback if 3D viewer fails */}
            <div className="absolute inset-0 flex items-center justify-center text-jayWhite bg-jayBlack bg-opacity-50">
              3D Viewer Loading... (Check console for errors)
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/3 bg-jayGrey p-6 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-jayYellow mb-4 flex items-center">
              <FaCar className="mr-2" /> Customize Your Car
            </h2>
            <div className="mb-4">
              <label htmlFor="carModel" className="block text-jayWhite mb-2">
                Car Model
              </label>
              <select
                id="carModel"
                className="w-full p-2 rounded bg-jayBlack text-jayWhite"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
              >
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
            <div className="mb-4">
              <label className="block text-jayWhite mb-2 flex items-center">
                <FaPaintRoller className="mr-2" /> Wrap Color
              </label>
              <div className="flex space-x-4">
                <button
                  className={`w-8 h-8 rounded-full border-2 ${wrapColor === 'Matte Black' ? 'border-jayYellow' : 'border-jayWhite'}`}
                  style={{ backgroundColor: '#1A1A1A' }}
                  onClick={() => setWrapColor('Matte Black')}
                  aria-label="Select Matte Black wrap"
                />
                <button
                  className={`w-8 h-8 rounded-full border-2 ${wrapColor === 'Gloss Yellow' ? 'border-jayYellow' : 'border-jayWhite'}`}
                  style={{ backgroundColor: '#FFC107' }}
                  onClick={() => setWrapColor('Gloss Yellow')}
                  aria-label="Select Gloss Yellow wrap"
                />
                <button
                  className={`w-8 h-8 rounded-full border-2 ${wrapColor === 'Chrome' ? 'border-jayYellow' : 'border-jayWhite'}`}
                  style={{ backgroundColor: '#C0C0C0' }}
                  onClick={() => setWrapColor('Chrome')}
                  aria-label="Select Chrome wrap"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-jayWhite mb-2 flex items-center">
                <FaWrench className="mr-2" /> Performance Mod
              </label>
              <div className="flex space-x-4">
                <button
                  className={`p-2 rounded ${mod === 'None' ? 'bg-jayYellow text-jayBlack' : 'bg-jayBlack text-jayWhite'} hover:bg-jayWhite hover:text-jayBlack transition`}
                  onClick={() => setMod('None')}
                  aria-label="Select no performance mod"
                >
                  None
                </button>
                <button
                  className={`p-2 rounded ${mod === 'Borla Exhaust' ? 'bg-jayYellow text-jayBlack' : 'bg-jayBlack text-jayWhite'} hover:bg-jayWhite hover:text-jayBlack transition`}
                  onClick={() => setMod('Borla Exhaust')}
                  aria-label="Select Borla Exhaust mod"
                >
                  <FaWrench /> Exhaust
                </button>
                <button
                  className={`p-2 rounded ${mod === 'Lowering Springs' ? 'bg-jayYellow text-jayBlack' : 'bg-jayBlack text-jayWhite'} hover:bg-jayWhite hover:text-jayBlack transition`}
                  onClick={() => setMod('Lowering Springs')}
                  aria-label="Select Lowering Springs mod"
                >
                  <FaWrench /> Springs
                </button>
              </div>
            </div>
            <p className="text-jayWhite mb-4">
              Parts List: {carModel.replace(/_/g, ' ').replace(/-/, ' ').replace(/^\w/, c => c.toUpperCase()).replace(/mecerdes/, 'Mercedes').replace(/mersedes/, 'Mercedes')}, {wrapColor}, {mod}
            </p>
            <button
              onClick={handleSaveDesign}
              className="w-full bg-jayYellow text-jayBlack px-4 py-2 rounded hover:bg-jayWhite transition-transform transform hover:scale-105"
              aria-label="Save your car design"
            >
              Save Design
            </button>
            <Link
              href="/booking"
              className="block mt-4 text-center text-jayYellow hover:underline"
              aria-label="Request a custom build"
            >
              Request Custom Build
            </Link>
            <p className="text-sm text-jayWhite mt-4">
              Note: Renderings are illustrative. Final builds subject to garage
              confirmation.
            </p>
          </motion.div>
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-jayGrey p-6 rounded-lg max-w-md w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-jayYellow mb-4">
                  Your Custom Design
                </h3>
                <p className="text-jayWhite mb-4">
                  Car Model: {carModel.replace(/_/g, ' ').replace(/-/, ' ').replace(/^\w/, c => c.toUpperCase()).replace(/mecerdes/, 'Mercedes').replace(/mersedes/, 'Mercedes')}
                  <br />
                  Wrap Color: {wrapColor}
                  <br />
                  Performance Mod: {mod}
                </p>
                <p className="text-jayWhite mb-4">
                  Design saved! Proceed to booking to submit your request.
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={closeModal}
                    className="bg-jayBlack text-jayWhite px-4 py-2 rounded hover:bg-jayWhite hover:text-jayBlack transition"
                    aria-label="Close modal"
                  >
                    Close
                  </button>
                  <Link
                    href="/booking"
                    className="bg-jayYellow text-jayBlack px-4 py-2 rounded hover:bg-jayWhite transition"
                    aria-label="Proceed to booking"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}