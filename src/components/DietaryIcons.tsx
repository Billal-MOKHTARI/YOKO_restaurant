import React from 'react';
import { Leaf, Flame, Wheat } from 'lucide-react';

interface DietaryIconsProps {
  dietary?: {
    vegetarian?: boolean;
    spicy?: boolean;
    glutenFree?: boolean;
  };
}

export function DietaryIcons({ dietary }: DietaryIconsProps) {
  if (!dietary) return null;

  return (
    <div className="flex gap-2 mt-2">
      {dietary.vegetarian && (
        <span className="text-green-600 dark:text-green-400" title="Vegetarian">
          <Leaf size={16} aria-label="Vegetarian" />
        </span>
      )}
      {dietary.spicy && (
        <span className="text-red-600 dark:text-red-400" title="Spicy">
          <Flame size={16} aria-label="Spicy" />
        </span>
      )}
      {dietary.glutenFree && (
        <span className="text-amber-600 dark:text-amber-400" title="Gluten Free">
          <Wheat size={16} aria-label="Gluten Free" />
        </span>
      )}
    </div>
  );
}