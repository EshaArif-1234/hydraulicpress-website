'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaIndustry, FaTools, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    name: 'H-Series Hydraulic Press',
    category: 'Industrial',
    capacity: '100-500 Tons',
    description: 'Heavy-duty hydraulic press for industrial manufacturing with advanced pressure control system.',
    features: [
      'Adjustable pressure settings',
      'Digital control panel',
      'Safety interlocking system',
      'Automatic cycle operation'
    ],
    image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=739&q=80',
    applications: ['Automotive parts forming', 'Metal stamping', 'Deep drawing']
  },
  {
    id: 2,
    name: 'C-Frame Press',
    category: 'Workshop',
    capacity: '20-50 Tons',
    description: 'Versatile C-frame press perfect for small to medium workshops and maintenance facilities.',
    features: [
      'Compact design',
      'Manual/Auto dual mode',
      'Adjustable ram speed',
      'Mobile base option'
    ],
    image: 'https://images.unsplash.com/photo-1589792923962-537704632910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    applications: ['Bearing installation', 'Bending', 'Assembly']
  },
  {
    id: 3,
    name: 'Four-Column Press',
    category: 'Industrial',
    capacity: '200-1000 Tons',
    description: 'High-precision four-column press for heavy-duty industrial applications.',
    features: [
      'Even pressure distribution',
      'Large work area',
      'PLC control system',
      'Hydraulic cushion system'
    ],
    image: 'https://images.unsplash.com/photo-1633707344905-0c5c0a463494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    applications: ['Large panel forming', 'Composite molding', 'Heavy stamping']
  },
  {
    id: 4,
    name: 'Laboratory Press',
    category: 'Laboratory',
    capacity: '5-15 Tons',
    description: 'Precision hydraulic press for laboratory testing and research applications.',
    features: [
      'High accuracy',
      'Temperature control',
      'Data logging',
      'Small footprint'
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    applications: ['Material testing', 'Sample preparation', 'Research']
  }
];

const categories = ['All', 'Industrial', 'Workshop', 'Laboratory'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-40">
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
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-0.5 text-sm">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {product.applications.slice(0, 2).map((application, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Inquire Now <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
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
      <section className="py-24 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We specialize in designing and manufacturing custom hydraulic presses tailored to your specific requirements.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
