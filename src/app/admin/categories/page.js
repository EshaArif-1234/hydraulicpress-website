'use client';

import { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/categories');
      const result = await res.json();
      if (result.success) {
        setCategories(result.data);
      } else {
        setError(result.error || 'Failed to fetch categories.');
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const url = editingCategory ? `/api/categories/${editingCategory._id}` : '/api/categories';
    const method = editingCategory ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setName('');
        setEditingCategory(null);
        fetchCategories(); // Refresh the list
      } else {
        setError(result.error || `Failed to ${editingCategory ? 'update' : 'create'} category.`);
      }
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setName(category.name);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' });
        const result = await res.json();
        if (res.ok && result.success) {
          fetchCategories(); // Refresh the list
        } else {
          setError(result.error || 'Failed to delete category.');
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const cancelEdit = () => {
    setEditingCategory(null);
    setName('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Manage Categories</h1>

      {/* Form for adding/editing categories */}
      <form onSubmit={handleSubmit} className="mb-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          {editingCategory ? 'Edit Category' : 'Add New Category'}
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
          <div className="flex-grow w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button type="submit" disabled={submitting} className="w-full sm:w-auto flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400">
              <FaPlus className="mr-2" />
              {submitting ? (editingCategory ? 'Updating...' : 'Adding...') : (editingCategory ? 'Update' : 'Add')}
            </button>
            {editingCategory && (
              <button type="button" onClick={cancelEdit} className="w-full sm:w-auto bg-gray-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Cancel
              </button>
            )}
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>

      {/* List of categories */}
      {loading ? (
        <p className="text-gray-500 dark:text-gray-400">Loading categories...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {categories.map((cat) => (
                <tr key={cat._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{cat.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => handleEdit(cat)} className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"><FaEdit /></button>
                    <button onClick={() => handleDelete(cat._id)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
