'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const getImageUrl = (url) => {
  if (url && (url.startsWith('http') || url.startsWith('/'))) {
    return url;
  }
  return 'https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg';
};

export default function ProductDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/products/${id}`);
          if (!res.ok) {
            throw new Error('Failed to fetch product.');
          }
          const result = await res.json();
          if (result.success) {
            setProduct(result.data);
          } else {
            setError(result.error || 'Product not found.');
          }
        } catch (err) {
          setError(err.message);
        }
        setLoading(false);
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl text-gray-800 dark:text-gray-200">Loading product details...</div>
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

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl text-gray-700 dark:text-gray-300">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <FaArrowLeft className="mr-2" />
              Back to Products
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-96 md:h-auto cursor-pointer" onClick={() => setIsModalOpen(true)}>
  {product.imageUrl?.startsWith('data:image') ? (
    <img
      src={product.imageUrl}
      alt={product.name}
      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      className="absolute inset-0 w-full h-full transition-transform duration-500 hover:scale-105"
    />
  ) : (
    <Image
      src={getImageUrl(product.imageUrl)}
      alt={product.name}
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 hover:scale-105"
    />
  )}
</div>

{/* Modal for image preview */}
{isModalOpen && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
    onClick={() => setIsModalOpen(false)}
  >
    <div className="relative max-w-3xl w-full flex justify-center items-center" onClick={e => e.stopPropagation()}>
      <button
        className="absolute top-2 right-2 text-white text-3xl font-bold z-10 hover:text-red-400"
        onClick={() => setIsModalOpen(false)}
        aria-label="Close"
      >
        &times;
      </button>
      {product.imageUrl?.startsWith('data:image') ? (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-lg shadow-lg max-h-[80vh] max-w-full"
          style={{ objectFit: 'contain' }}
        />
      ) : (
        <Image
          src={getImageUrl(product.imageUrl)}
          alt={product.name}
          width={800}
          height={600}
          className="rounded-lg shadow-lg max-h-[80vh] max-w-full"
          style={{ objectFit: 'contain' }}
        />
      )}
    </div>
  </div>
)}
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    {product.category}
                  </span>
                  {product.capacity && (
                    <span className="ml-3 inline-block px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full">
                      {product.capacity}
                    </span>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h1>
                <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">PKR {product.price.toLocaleString()}</p>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
