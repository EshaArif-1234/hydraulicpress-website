import Image from "next/image";
import { BeakerIcon, BoltIcon, CogIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Advanced Technology',
    description: 'State-of-the-art hydraulic systems with precise control and monitoring capabilities.',
    icon: BeakerIcon,
  },
  {
    title: 'Energy Efficient',
    description: 'Optimized power consumption without compromising on performance.',
    icon: BoltIcon,
  },
  {
    title: 'Easy Maintenance',
    description: 'Designed for minimal downtime with easy access to all components.',
    icon: CogIcon,
  },
];

import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Industrial Strength Hydraulic Press Solutions
              </h2>
              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                Precision engineering meets power with our state-of-the-art hydraulic press technology.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700">
                  Learn More
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl col-span-2">
                <Image
                  src="/machine-1.jpg"
                  alt="Industrial Hydraulic Press"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="products" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Why Choose Our Hydraulic Presses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of power, precision, and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-xl bg-gray-50 dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Slider */}
      <ImageSlider />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Transform Your Manufacturing Process?
            </h2>
            <p className="text-xl text-blue-100">
              Join hundreds of satisfied customers who have elevated their production capabilities.
            </p>
            <button className="mt-4 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
