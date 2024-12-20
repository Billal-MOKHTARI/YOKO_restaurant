import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  label?: string;
  className?: string;
}

export function BackButton({ 
  label = 'Back', 
  className = '' 
}: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg
        text-gray-600 hover:text-gray-900 
        dark:text-gray-400 dark:hover:text-white
        bg-white hover:bg-gray-50
        dark:bg-gray-800 dark:hover:bg-gray-700
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        ${className}
      `}
      aria-label="Go back"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
}