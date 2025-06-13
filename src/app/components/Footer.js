export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">About Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Leading manufacturer of industrial hydraulic press solutions, delivering precision and power since 1990.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="#" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Solutions</a></li>
              <li><a href="#" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>123 Industrial Ave</li>
              <li>Manufacturing District</li>
              <li>contact@hydraulicpress.com</li>
              <li>03244002525</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Newsletter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Subscribe to our newsletter for updates and insights.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-700"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} UH Hydraulics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
