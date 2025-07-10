'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ServiceCard = ({ id, title, description, model= "gpt-4o", service = "openai" }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleUseItClick = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    
    window.location.href = `${process.env.NEXT_PUBLIC_gtwy_url}/new?template_id=${id}`;
    
    setIsLoading(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
        {description}
      </p>
      
      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>{service}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{model}</span>
        </div>
        
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
            isLoading 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700'
          }`}
          onClick={handleUseItClick}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Use Template"}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;