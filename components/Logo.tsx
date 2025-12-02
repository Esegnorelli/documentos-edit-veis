import React from 'react';


export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src="/assets/Logo.webp" alt="Hora do Pastel" className="w-32 h-auto" />
    </div>
  );
};