'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle, FaCog, FaTag } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
  },
  {
    id: 5,
    name: 'Hydraulic Machine 1',
    category: 'Industrial',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 1, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image1.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 6,
    name: 'Hydraulic Machine 2',
    category: 'Workshop',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 2, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image2.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 7,
    name: 'Hydraulic Machine 3',
    category: 'Laboratory',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 3, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image3.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 8,
    name: 'Hydraulic Machine 4',
    category: 'Industrial',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 4, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image4.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 9,
    name: 'Hydraulic Machine 5',
    category: 'Workshop',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 5, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image5.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 10,
    name: 'Hydraulic Machine 6',
    category: 'Laboratory',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 6, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image6.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 11,
    name: 'Hydraulic Machine 7',
    category: 'Industrial',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 7, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image7.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 12,
    name: 'Hydraulic Machine 8',
    category: 'Workshop',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 8, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image8.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 13,
    name: 'Hydraulic Machine 9',
    category: 'Laboratory',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 9, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image9.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 14,
    name: 'Hydraulic Machine 10',
    category: 'Industrial',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 10, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image10.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 15,
    name: 'Hydraulic Machine 11',
    category: 'Workshop',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 11, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image11.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 16,
    name: 'Hydraulic Machine 12',
    category: 'Laboratory',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 12, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image12.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 17,
    name: 'Hydraulic Machine 13',
    category: 'Industrial',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 13, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image13.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 18,
    name: 'Hydraulic Machine 14',
    category: 'Workshop',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 14, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image14.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 19,
    name: 'Hydraulic Machine 15',
    category: 'Laboratory',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 15, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image15.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 20,
    name: 'Hydraulic Machine 16',
    category: 'Industrial',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 16, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image16.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 21,
    name: 'Hydraulic Machine 17',
    category: 'Workshop',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 17, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image17.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 22,
    name: 'Hydraulic Machine 18',
    category: 'Laboratory',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 18, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image18.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 23,
    name: 'Hydraulic Machine 19',
    category: 'Industrial',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 19, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image19.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 24,
    name: 'Hydraulic Machine 20',
    category: 'Workshop',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 20, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image20.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 25,
    name: 'Hydraulic Machine 21',
    category: 'Laboratory',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 21, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image21.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 26,
    name: 'Hydraulic Machine 22',
    category: 'Industrial',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 22, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image22.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 27,
    name: 'Hydraulic Machine 23',
    category: 'Workshop',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 23, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image23.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 28,
    name: 'Hydraulic Machine 24',
    category: 'Laboratory',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 24, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image24.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 29,
    name: 'Hydraulic Machine 25',
    category: 'Industrial',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 25, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image25.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 30,
    name: 'Hydraulic Machine 26',
    category: 'Workshop',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 26, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image26.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 31,
    name: 'Hydraulic Machine 27',
    category: 'Laboratory',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 27, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image27.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 32,
    name: 'Hydraulic Machine 28',
    category: 'Industrial',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 28, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image28.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 33,
    name: 'Hydraulic Machine 29',
    category: 'Workshop',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 29, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image29.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 34,
    name: 'Hydraulic Machine 30',
    category: 'Laboratory',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 30, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image30.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 35,
    name: 'Hydraulic Machine 31',
    category: 'Industrial',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 31, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image31.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 36,
    name: 'Hydraulic Machine 32',
    category: 'Workshop',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 32, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image32.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 37,
    name: 'Hydraulic Machine 33',
    category: 'Laboratory',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 33, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image33.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 38,
    name: 'Hydraulic Machine 34',
    category: 'Industrial',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 34, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image34.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 39,
    name: 'Hydraulic Machine 35',
    category: 'Workshop',
    capacity: '10-50 Tons',
    description: 'High-performance hydraulic machine model 35, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image35.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 40,
    name: 'Hydraulic Machine 36',
    category: 'Laboratory',
    capacity: '50-100 Tons',
    description: 'High-performance hydraulic machine model 36, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image36.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 41,
    name: 'Hydraulic Machine 37',
    category: 'Industrial',
    capacity: '100-200 Tons',
    description: 'High-performance hydraulic machine model 37, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image37.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 42,
    name: 'Hydraulic Machine 38',
    category: 'Workshop',
    capacity: '200-500 Tons',
    description: 'High-performance hydraulic machine model 38, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image38.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  },
  {
    id: 43,
    name: 'Hydraulic Machine 39',
    category: 'Laboratory',
    capacity: '500-1000 Tons',
    description: 'High-performance hydraulic machine model 39, designed for reliability and efficiency in various applications.',
    features: ['Advanced control system', 'Robust steel frame', 'Energy-efficient design', 'Safety features included'],
    image: '/image39.jpeg',
    applications: ['Stamping', 'Molding', 'Assembly', 'Forming']
  }
];

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (params.id) {
      const foundProduct = products.find(p => p.id.toString() === params.id);
      setProduct(foundProduct);
    }
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-gray-600 dark:text-gray-300">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/products" className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              <FaArrowLeft className="mr-2" />
              Back to Products
            </Link>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product Image */}
            <div className="mb-8 lg:mb-0">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
              <div className="flex items-center mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-2">
                  <FaTag className="inline-block mr-1.5" />
                  {product.category}
                </span>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <FaCog className="inline-block mr-1.5" />
                  {product.capacity}
                </span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((application, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      {application}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
