'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

const getImageUrl = (url) => {
  if (url && (url.startsWith('http') || url.startsWith('/'))) {
    return url;
  }
  return 'https://via.placeholder.com/150';
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const result = await res.json();
        if (result.success) {
          setProducts(result.data);
        } else {
          setError(result.error || 'An unknown error occurred');
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const res = await fetch(`/api/products/${productId}`, {
          method: 'DELETE',
        });
        const result = await res.json();
        if (res.ok && result.success) {
          setProducts(products.filter((p) => p._id !== productId));
        } else {
          setError(result.error || 'Failed to delete product.');
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return <div className="text-center text-gray-500 py-8">Loading products...</div>;
  if (error) return <div className="text-center text-red-500 py-8">Error: {error}</div>;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Manage Products</h1>
        <Link href="/admin/products/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
          <FaPlus />
          Add New Product
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Image</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">
                  {product.imageUrl?.startsWith('data:image') ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                      style={{ objectFit: 'cover', width: 64, height: 64 }}
                    />
                  ) : (
                    <Image
                      src={getImageUrl(product.imageUrl)}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                  )}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">{product.name}</td>
                <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300">{product.category}</td>
                <td className="py-4 px-6 text-sm text-gray-500 dark:text-gray-300">PKR {product.price.toLocaleString()}</td>
                <td className="py-4 px-6 text-sm font-medium">
                  <div className="flex items-center gap-4">
                    <Link href={`/admin/products/${product._id}/edit`} className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                      <FaEdit size={18} />
                    </Link>
                    <button onClick={() => handleDelete(product._id)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                      <FaTrash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
