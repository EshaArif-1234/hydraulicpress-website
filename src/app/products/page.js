'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaIndustry, FaTools, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
 
  {
    id: 5,
    name: 'Hydraulic Machine 1',
    category: 'Industrial',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 1, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image1.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 6,
    name: 'Shredder machine',
    category: 'Workshop',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 2, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image2.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 7,
    name: 'Hydraulic Machine 3',
    category: 'Laboratory',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 3, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image3.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 8,
    name: 'Hydraulic Machine 4',
    category: 'Industrial',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 4, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image4.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 9,
    name: 'Hydraulic Machine 5',
    category: 'Workshop',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 5, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image5.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 10,
    name: 'Hydraulic Machine 6',
    category: 'Laboratory',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 6, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image6.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 11,
    name: 'Hydraulic Machine 7',
    category: 'Industrial',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 7, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image7.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 12,
    name: 'Hydraulic pump',
    category: 'Workshop',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 8, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image8.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 13,
    name: 'Hydraulic Machine 9',
    category: 'Laboratory',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 9, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image9.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 14,
    name: 'Hydraulic Machine 10',
    category: 'Industrial',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 10, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image10.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 15,
    name: 'Hydraulic Machine 11',
    category: 'Workshop',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 11, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image11.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 16,
    name: 'Hydraulic Machine 12',
    category: 'Laboratory',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 12, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image12.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 17,
    name: 'Hydraulic Machine 13',
    category: 'Industrial',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 13, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image13.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 18,
    name: 'Hydraulic Machine 14',
    category: 'Workshop',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 14, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image14.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 19,
    name: 'Hydraulic Machine 15',
    category: 'Laboratory',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 15, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image15.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 20,
    name: 'Hydraulic Machine 16',
    category: 'Industrial',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 16, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image16.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 21,
    name: 'Hydraulic Machine 17',
    category: 'Workshop',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 17, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image17.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 22,
    name: 'Hydraulic Machine 18',
    category: 'Laboratory',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 18, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image18.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 23,
    name: 'Hydraulic Machine 19',
    category: 'Industrial',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 19, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image19.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 24,
    name: 'Hydraulic Machine 20',
    category: 'Workshop',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 20, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image20.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 25,
    name: 'Hydraulic Machine 21',
    category: 'Laboratory',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 21, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image21.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 26,
    name: 'Hydraulic Machine 22',
    category: 'Industrial',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 22, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image22.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 27,
    name: 'Hydraulic Machine 23',
    category: 'Workshop',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 23, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image23.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 28,
    name: 'Hydraulic Machine 24',
    category: 'Laboratory',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 24, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image24.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 29,
    name: 'Hydraulic Machine 25',
    category: 'Industrial',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 25, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image25.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 30,
    name: 'Hydraulic Machine 26',
    category: 'Workshop',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 26, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image26.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 31,
    name: 'Hydraulic Machine 27',
    category: 'Laboratory',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 27, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image27.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 32,
    name: 'Hydraulic Machine 28',
    category: 'Industrial',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 28, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image28.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 33,
    name: 'Hydraulic Machine 29',
    category: 'Workshop',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 29, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image29.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 34,
    name: 'Hydraulic Machine 30',
    category: 'Laboratory',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 30, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image30.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 35,
    name: 'Hydraulic Machine 31',
    category: 'Industrial',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 31, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image31.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 36,
    name: 'Hydraulic Machine 32',
    category: 'Workshop',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 32, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image32.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 37,
    name: 'Hydraulic Machine 33',
    category: 'Laboratory',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 33, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image33.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 38,
    name: 'Hydraulic Machine 34',
    category: 'Industrial',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 34, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image34.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 39,
    name: 'Hydraulic Machine 35',
    category: 'Workshop',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 35, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image35.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 40,
    name: 'Hydraulic Machine 36',
    category: 'Laboratory',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 36, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image36.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 41,
    name: 'Hydraulic Machine 37',
    category: 'Industrial',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 37, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image37.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 42,
    name: 'Hydraulic Machine 38',
    category: 'Workshop',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 38, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image38.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 43,
    name: 'Hydraulic Machine 39',
    category: 'Laboratory',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 39, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image39.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  }
];

const categories = ['All', 'Industrial', 'Workshop', 'Laboratory'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Our Products
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover our range of high-quality hydraulic presses designed for various industrial applications
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors
                    ${selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-full">
                  <div className="relative h-56">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {product.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                          {product.category}
                        </span>
                        <span className="inline-block ml-2 px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full">
                          {product.capacity}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  currentPage === 1
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  currentPage === totalPages
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We specialize in custom hydraulic solutions. Contact us for a personalized quote.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
