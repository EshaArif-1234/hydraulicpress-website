'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTools, FaUsers, FaAward, FaIndustry } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Satisfied Clients', value: '500+' },
  { label: 'Projects Completed', value: '1000+' },
  { label: 'Team Members', value: '50+' },
];

const values = [
  {
    icon: FaTools,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in hydraulic press manufacturing, ensuring durability and precision in every machine.',
  },
  {
    icon: FaUsers,
    title: 'Customer Focus',
    description: 'Our clients\' success is our priority. We provide personalized solutions and exceptional after-sales support.',
  },
  {
    icon: FaAward,
    title: 'Innovation',
    description: 'We continuously evolve our technology and processes to deliver cutting-edge hydraulic press solutions.',
  },
  {
    icon: FaIndustry,
    title: 'Industry Leadership',
    description: 'Setting benchmarks in the hydraulic press industry through advanced technology and expertise.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            About UH Hydraulics
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Leading manufacturer of high-quality hydraulic presses, serving industries worldwide with innovative solutions since 2008.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2008, UH Hydraulics has grown from a small workshop to a leading manufacturer of hydraulic presses in Pakistan. Our journey has been driven by a passion for engineering excellence and a commitment to quality.
                </p>
                <p>
                  We specialize in designing and manufacturing custom hydraulic presses for various industries, including automotive, aerospace, and manufacturing. Our team of expert engineers and technicians ensures that each press meets the highest standards of quality and performance.
                </p>
                <p>
                  Today, we are proud to serve clients across Pakistan and beyond, providing innovative solutions that help businesses achieve their production goals efficiently and reliably.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/factory.jpg"
                alt="UH Hydraulics Factory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Production?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our hydraulic press solutions can benefit your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
