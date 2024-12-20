import React from 'react';
import { Leaf, Wheat, Flame } from 'lucide-react';

interface FilterProps {
  filters: {
    vegetarian: boolean;
    glutenFree: boolean;
    spicy: boolean;
    priceRange: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    vegetarian: boolean;
    glutenFree: boolean;
    spicy: boolean;
    priceRange: string;
  }>>;
}

export function MenuFilters({ filters, setFilters }: FilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <button
        onClick={() => setFilters(prev => ({ ...prev, vegetarian: !prev.vegetarian }))}
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium 
                   transition-colors ${
          filters.vegetarian
            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100'
        }`}
      >
        <Leaf className="w-4 h-4 mr-2" />
        Vegetarian
      </button>

      <button
        onClick={() => setFilters(prev => ({ ...prev, glutenFree: !prev.glutenFree }))}
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium 
                   transition-colors ${
          filters.glutenFree
            ? 'bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100'
            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100'
        }`}
      >
        <Wheat className="w-4 h-4 mr-2" />
        Gluten-free
      </button>

      <button
        onClick={() => setFilters(prev => ({ ...prev, spicy: !prev.spicy }))}
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium 
                   transition-colors ${
          filters.spicy
            ? 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100'
        }`}
      >
        <Flame className="w-4 h-4 mr-2" />
        Spicy
      </button>

      <select
        value={filters.priceRange}
        onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
        className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 
                   dark:bg-gray-700 dark:text-gray-100 border-none focus:ring-2 
                   focus:ring-indigo-500"
      >
        <option value="all">All Prices</option>
        <option value="under50">Under $50</option>
        <option value="50to100">$50 - $100</option>
        <option value="over100">Over $100</option>
      </select>
    </div>
  );
}