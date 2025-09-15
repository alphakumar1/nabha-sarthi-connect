// src/components/common/Input.jsx
import React from 'react';

export default function Input({ label, ...props }) {
  return (
    <label className="block w-full">
      {label && <div className="text-sm font-medium mb-2">{label}</div>}
      <input
        {...props}
        className="w-full px-4 py-2 rounded-xl border border-muted bg-transparent focus:ring-2 focus:ring-primary focus:outline-none"
      />
    </label>
  );
}
