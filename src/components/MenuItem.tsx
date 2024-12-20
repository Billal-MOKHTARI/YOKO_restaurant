import React from 'react';
import type { MenuItem as MenuItemType } from '../types/menu';
import { DietaryIcons } from './DietaryIcons';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium dark:text-white">{item.name}</h3>
          <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
            ${item.price}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {item.desc}
        </p>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Ingredients
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.ingredients.join(', ')}
          </p>
          <DietaryIcons dietary={item.dietary} />
        </div>
      </div>
    </div>
  );
}