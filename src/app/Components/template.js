'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ServiceCard from "./ServiceCard";

const LoadingCard = () => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse">
    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      <div className="h-5 bg-gray-200 rounded w-32"></div>
    </div>
    <div className="space-y-2 mb-6">
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
      <div className="flex items-center gap-4">
        <div className="h-3 bg-gray-200 rounded w-12"></div>
        <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
        <div className="h-3 bg-gray-200 rounded w-10"></div>
      </div>
      <div className="h-8 bg-gray-200 rounded w-24"></div>
    </div>
  </div>
);
const colorOptions = ["red", "blue", "green", "yellow", "purple"]; // Sample colors for cards

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      setError("API URL is not configured");
      setLoading(false);
      return;
    }

    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Template/all`);

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        if (!data.success) throw new Error("API request failed");

        const transformedServices = data.result.map((service, index) => ({
          id: service._id,
          title: service.title,
          description: service.description || "No description available",
          color: colorOptions[index % colorOptions.length], // assign color in cycle
        }));

        setServices(transformedServices);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find Your Perfect Template – Expertly Tailored to Elevate Your Vision.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <svg className="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Templates</h3>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                {...service} 
                onClick={() => handleCardClick(service.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No Templates Available</h3>
            <p className="text-gray-500">Check back later for new templates.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesPage;