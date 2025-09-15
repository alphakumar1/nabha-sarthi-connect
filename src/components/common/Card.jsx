// src/components/common/Card.jsx
import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-card p-4 rounded-2xl shadow-md border border-transparent hover:shadow-lg transition ${className}`}>
      {children}
    </div>
  );
}
