import React from "react";

interface LoadingSpinnerProps {
  loading?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loading = true }) => {
  if (!loading) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black z-50">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-900 border-l-transparent animate-spin"></div>
        {/* Inner Ring */}
        <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-blue-400 border-b-transparent border-l-blue-700 animate-[spin_1.5s_linear_infinite_reverse]"></div>
        {/* Core Dot */}
        <div className="absolute inset-8 bg-blue-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(37,99,235,0.7)]"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
