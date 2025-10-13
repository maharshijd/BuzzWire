import React from 'react';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

export default LoadingSpinner;