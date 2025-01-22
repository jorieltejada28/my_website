import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800">
      <div className="text-center">
        <div className="loader relative w-16 h-16">
          <div className="loader-inner absolute border-4 border-t-transparent border-white rounded-full w-full h-full animate-spin"></div>
          <div className="loader-inner absolute border-4 border-b-transparent border-white rounded-full w-12 h-12 top-2 left-2 animate-spin-reverse"></div>
        </div>
        <p className="mt-4 text-lg text-white animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;