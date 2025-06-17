'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const getImageUrl = (url) => {
  if (url && (url.startsWith('http') || url.startsWith('/'))) {
    return url;
  }
  return 'https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg';
};

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [dbCategories, setDbCategories] = useState([]);
  const { data: session } = useSession();
  const productsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/categories'),
        ]);

        if (!productsRes.ok) throw new Error('Failed to fetch products');
        if (!categoriesRes.ok) throw new Error('Failed to fetch categories');

        const productsResult = await productsRes.json();
        const categoriesResult = await categoriesRes.json();

        if (productsResult.success) setProducts(productsResult.data);
        else setError(productsResult.error || 'An unknown error occurred');

        if (categoriesResult.success) {
          setDbCategories([{ _id: 'all', name: 'All' }, ...categoriesResult.data]);
        } else {
          console.error('Failed to load categories.');
        }

      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(product => {
    if (!product || !product.name || !product.description) {
      console.error('Invalid product data found and filtered out:', product);
      return false;
    }
    const matchesCategory = selectedCategory === 'all' || (product.category && product.category.toLowerCase() === selectedCategory.toLowerCase());
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };



  useEffect(() => {
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl text-gray-800 dark:text-gray-200">Loading products...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl text-red-500">Error: {error}</div>
        </div>
        <Footer />
      </div>
    );
  }

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
            Discover our range of high-quality hydraulic presses designed for various industrial applications.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4">
              {dbCategories.map((category) => (
                <button
                  key={category._id}
                  onClick={() => setSelectedCategory(category.name.toLowerCase())}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors
                    ${selectedCategory === category.name.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            {/* Search Bar and Add Product Button */}
            <div className="flex items-center gap-4">
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentProducts.map((product) => (
                <Link href={`/products/${product._id}`} key={product._id} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
                  <div className="relative w-full h-56">
                    {product.imageUrl?.startsWith('data:image') ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        className="absolute inset-0 w-full h-full"
                      />
                    ) : (
                      <Image
                        src={getImageUrl(product.imageUrl)}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bolacccccd text-gray-900 dark:text-white mb-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                        {product.category}
                      </span>
                      {product.capacity && (
                        <span className="inline-block ml-2 px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full">
                          {product.capacity}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 flex-grow">
                      {product.description}
                    </p>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">PKR {product.price.toLocaleString()}</p>
                    <div className="mt-auto">
                      <span className="text-blue-500 dark:text-blue-400 group-hover:underline flex items-center">
                        Learn More <FaArrowRight className="ml-2" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">No products match your criteria</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or category filters.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex rounded-md shadow">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium
                      ${currentPage === i + 1
                        ? 'bg-blue-50 border-blue-500 text-blue-600 z-10'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </nav>
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
