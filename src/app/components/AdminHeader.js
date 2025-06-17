'use client';

import { useSession, signOut } from 'next-auth/react';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

export default function AdminHeader() {
  const { data: session } = useSession();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <div>
        {/* You can add a title or breadcrumbs here if needed */}
      </div>
      <div className="flex items-center gap-4">
        {session?.user && (
          <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <FaUserCircle className="w-6 h-6" />
            <span className="font-semibold">{session.user.name}</span>
          </div>
        )}
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </header>
  );
}
