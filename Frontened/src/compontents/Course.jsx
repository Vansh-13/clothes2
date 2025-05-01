import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import { FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clothesData from './list.json';
import Navbar from './Navbar';
import Footer from './Footer';

function Course() {
  const [book, setBook] = useState(clothesData);

  const handleExploreNow = () => {
    window.open('https://www.instagram.com/doonsisters_3/profilecard/?igsh=MW1xamlnNW5kMTFoZg==', '_blank');
  }

  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-900 py-12 px-6 sm:px-8 lg:px-16">
       
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <br></br> <br></br>
        
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Find Your Perfect Outfit
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 mb-8">
            A curated selection of the latest trends. Explore fresh styles to refresh your wardrobe.
          </p>
          <motion.button
            onClick={handleExploreNow}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Explore Collection
          </motion.button>
        </motion.div>

        <div className="text-center mb-16">
          <div className="flex justify-center space-x-6">
            <Link to="/collections/kids">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-lg text-indigo-600 hover:text-indigo-800"
              >
                Kids
              </motion.button>
            </Link>
            <Link to="/collections/women">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-lg text-indigo-600 hover:text-indigo-800"
              >
                Women
              </motion.button>
            </Link>
            <Link to="/collections/men">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-lg text-indigo-600 hover:text-indigo-800"
              >
                Men
              </motion.button>
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Featured Picks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {book.map((item) => (
              <motion.div
                key={item.id}
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Cards item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="mt-20 text-center bg-gray-50 p-12 rounded-lg shadow-lg">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl font-semibold text-gray-800 mb-4"
          >
            Refresh Your Wardrobe Today
          </motion.h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6">
            Explore exclusive collections and find the perfect pieces for any occasion.
          </p>
          <Link to="/collections">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Shop Now
            </motion.button>
          </Link>
        </div>

        <div className="mt-16 p-12 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            What Our Customers Are Saying
          </h2>

          <div className="flex justify-center space-x-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-sm rounded-lg p-6 bg-white shadow-xl"
            >
              <p className="text-lg text-gray-600 mb-4">
                "FashionHub has completely transformed my wardrobe! The collection is amazing, and the quality is top-notch."
              </p>
              <p className="font-semibold text-gray-700">John Doe</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-sm rounded-lg p-6 bg-white shadow-xl"
            >
              <p className="text-lg text-gray-600 mb-4">
                "Absolutely love the customer service and the way FashionHub keeps up with the latest trends. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-700">Jane Smith</p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Course;
