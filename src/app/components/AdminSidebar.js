'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaTachometerAlt, FaBoxOpen, FaPlusCircle, FaTags, FaExternalLinkAlt } from 'react-icons/fa';

const navLinks = [
  { name: 'Dashboard', href: '/admin', icon: FaTachometerAlt },
  { name: 'Products', href: '/admin/products', icon: FaBoxOpen },
  { name: 'Add Product', href: '/admin/products/new', icon: FaPlusCircle },
  { name: 'Categories', href: '/admin/categories', icon: FaTags },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 flex flex-col h-screen shadow-lg">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8">Admin Panel</h1>
      <nav className="flex flex-col gap-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg text-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <link.icon className="w-6 h-6" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-4 py-3 rounded-lg text-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FaExternalLinkAlt className="w-6 h-6" />
          <span>Go to Site</span>
        </Link>
      </div>
    </aside>
  );
}
