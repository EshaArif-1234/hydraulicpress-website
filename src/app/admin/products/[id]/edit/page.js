'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';



export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [capacity, setCapacity] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [dbCategories, setDbCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setCategoriesLoading(true);
      try {
        const res = await fetch('/api/categories');
        const result = await res.json();
        if (result.success) {
          setDbCategories(result.data);
        } else {
          console.error('Failed to load categories.');
        }
      } catch (err) {
        console.error(err.message);
      }
      setCategoriesLoading(false);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products/${id}`);
        const result = await res.json();

        if (res.ok && result.success) {
          const product = result.data;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price);
          setCategory(product.category);
          setCapacity(product.capacity || '');
          setImageUrl(product.imageUrl);
        } else {
          setError(result.error || 'Failed to fetch product data.');
        }
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name, 
          description, 
          price: Number(price), 
          category, 
          capacity, 
          imageUrl 
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        router.push('/admin/products');
      } else {
        setError(result.error || 'Failed to update product.');
      }
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  if (loading) return <div className="text-center text-gray-500 py-8">Loading product...</div>;
  if (error) return <div className="text-center text-red-500 py-8">Error: {error}</div>;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price (PKR)</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              disabled={categoriesLoading || dbCategories.length === 0}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            >
              {categoriesLoading ? (
                <option>Loading categories...</option>
              ) : dbCategories.length > 0 ? (
                dbCategories.map((cat) => (
                  <option key={cat._id} value={cat.name}>{cat.name}</option>
                ))
              ) : (
                <option value="">No categories available</option>
              )}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Capacity (Optional)</label>
          <input type="text" id="capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Image</label>
          <input type="file" id="image" onChange={handleImageChange} accept="image/*" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
        </div>
        {imageUrl && (
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Image Preview:</p>
            <Image src={imageUrl} alt="Image preview" width={200} height={200} className="mt-2 rounded-md object-cover" />
          </div>
        )}
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <div className="flex justify-end">
          <button type="submit" disabled={submitting} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400">
            {submitting ? 'Updating...' : 'Update Product'}
          </button>
        </div>
      </form>
    </div>
  );
}
