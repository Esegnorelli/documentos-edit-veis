import React from 'react';
import { ChefHat } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <ChefHat className="w-12 h-12 text-red-600" strokeWidth={1.5} />
        <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-4 h-4 border-2 border-white"></div>
      </div>
      <div className="text-red-600 font-bold text-lg leading-tight text-center mt-1">
        HORA<br />
        <span className="text-yellow-500 text-base">DO</span> PASTEL
      </div>
    </div>
  );
};