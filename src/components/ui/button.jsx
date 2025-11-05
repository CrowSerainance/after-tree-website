import React from 'react';

export function Button({ children, className = '', variant = 'default', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    default: 'bg-[#2E4C3A] text-white hover:bg-[#284233]',
    secondary: 'bg-white text-[#223327] border border-[#cfe1cf] hover:bg-[#f2f6f2]',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
