// src/components/common/Button.jsx
import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-4 py-2 rounded-2xl text-sm font-semibold shadow-sm transition-transform transform hover:-translate-y-0.5 focus:outline-none';
  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    muted: 'bg-muted text-muted-foreground',
    emergency: 'bg-red-600 text-white',
    ghost: 'bg-transparent',
    accent: 'bg-accent text-accent-foreground'
  };

  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
