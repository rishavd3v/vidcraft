import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = 'primary' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'border-blue-500',
    secondary: 'border-gray-500',
    accent: 'border-purple-500'
  };

  const spinnerClasses = `
    animate-spin
    rounded-full
    border-2
    border-t-transparent
    ${sizeClasses[size]}
    ${colorClasses[color]}
  `;

  return (
    <div className="flex items-center justify-center">
      <div className={spinnerClasses}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;