'use client';

import Link from 'next/link';
import { FaTools, FaCog, FaWrench, FaChartLine, FaShieldAlt, FaUserCog } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    icon: FaTools,
    title: 'Installation & Setup',
    description: 'Professional installation and initial setup of hydraulic press machines with proper calibration and testing.',
    features: [
      'Site preparation assessment',
      'Professional installation',
      'Initial calibration',
      'Test runs and quality checks',
      'Operator training'
    ]
  },
  {
    icon: FaCog,
    title: 'Maintenance Plans',
    description: 'Regular maintenance services to ensure optimal performance and longevity of your hydraulic press equipment.',
    features: [
      'Scheduled inspections',
      'Preventive maintenance',
      'Parts replacement',
      'Performance optimization',
      'Documentation & reporting'
    ]
  },
  {
    icon: FaWrench,
    title: 'Repair Services',
    description: 'Quick and reliable repair services for all types of hydraulic press issues and breakdowns.',
    features: [
      'Emergency repairs',
      'Troubleshooting',
      'Parts replacement',
      'System restoration',
      '24/7 support available'
    ]
  },
  {
    icon: FaChartLine,
    title: 'Performance Optimization',
    description: 'Advanced analysis and optimization services to improve your hydraulic press efficiency and output.',
    features: [
      'Performance analysis',
      'System optimization',
      'Energy efficiency audit',
      'Process improvement',
      'Production analytics'
    ]
  },
  {
    icon: FaShieldAlt,
    title: 'Safety Inspections',
    description: 'Comprehensive safety inspections and certifications for your hydraulic press equipment.',
    features: [
      'Safety audits',
      'Compliance checks',
      'Risk assessment',
      'Safety training',
      'Certification support'
    ]
  },
  {
    icon: FaUserCog,
    title: 'Operator Training',
    description: 'Professional training programs for operators to ensure safe and efficient machine operation.',
    features: [
      'Basic operation training',
      'Safety protocols',
      'Maintenance procedures',
      'Troubleshooting skills',
      'Advanced operation techniques'
    ]
  }
];

const maintenancePlans = [
  {
    name: 'Basic Care',
    price: 'Rs. 25,000',
    interval: 'per quarter',
    features: [
      'Quarterly inspections',
      'Basic maintenance',
      'Email support',
      'Regular reports',
      'Standard response time'
    ]
  },
  {
    name: 'Professional',
    price: 'Rs. 45,000',
    interval: 'per quarter',
    features: [
      'Monthly inspections',
      'Comprehensive maintenance',
      'Priority support',
      'Detailed analytics',
      'Fast response time',
      'Parts discount'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    interval: 'per agreement',
    features: [
      'Weekly inspections',
      'Full-service maintenance',
      '24/7 dedicated support',
      'Custom reporting',
      'Immediate response',
      'Parts included',
      'Training included'
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive support solutions for your hydraulic press equipment, from installation to maintenance and optimization
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Expert solutions for every aspect of your hydraulic press equipment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Maintenance Plans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Choose the perfect maintenance plan for your equipment
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden
                  ${plan.popular ? 'ring-2 ring-blue-600 dark:ring-blue-400' : ''}
                `}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                      Popular
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="ml-2 text-gray-600 dark:text-gray-300">
                      {plan.interval}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors
                      ${plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-900/90 dark:to-purple-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Need Custom Service Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us to discuss your specific requirements and get a tailored service plan.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Our Service Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
