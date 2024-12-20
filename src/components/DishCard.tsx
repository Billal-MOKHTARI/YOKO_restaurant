import React from 'react';
import { Leaf, Wheat, Flame } from 'lucide-react';
import type { MenuItem } from '../types/menu';
import { Link } from 'react-router-dom';

interface DishCardProps {
  dish: MenuItem;
}

export function DishCard({ dish }: DishCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden 
                    transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-48 object-cover transform transition-transform duration-300 
                     group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium dark:text-white">{dish.name}</h3>
          <span className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
            ${dish.price}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {dish.desc}
        </p>

        <div className="flex items-center gap-2 mb-4">
          {dish.dietary?.vegetarian && (
            <span className="inline-flex items-center text-green-600 dark:text-green-400">
              <Leaf className="w-4 h-4 mr-1" />
              Vegetarian
            </span>
          )}
          {dish.dietary?.glutenFree && (
            <span className="inline-flex items-center text-amber-600 dark:text-amber-400">
              <Wheat className="w-4 h-4 mr-1" />
              Gluten-free
            </span>
          )}
          {dish.dietary?.spicy && (
            <span className="inline-flex items-center text-red-600 dark:text-red-400">
              <Flame className="w-4 h-4 mr-1" />
              Spicy
            </span>
          )}
        </div>

        <Link
          to={`/dish/${encodeURIComponent(dish.name.toLowerCase())}`}
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium 
                     text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none 
                     focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors
                     dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}