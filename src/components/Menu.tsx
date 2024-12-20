import React, { useState } from 'react';
import { Search, ChefHat, Leaf, Flame, Wheat } from 'lucide-react';
import { MenuItem } from '../types/menu';
import { menuItems } from '../data/menu';
import { DishCard } from './DishCard';
import { MenuFilters } from './MenuFilters';

export function Menu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    vegetarian: false,
    glutenFree: false,
    spicy: false,
    priceRange: 'all'
  });

  const filterItems = (items: MenuItem[]) => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVegetarian = !filters.vegetarian || item.dietary?.vegetarian;
      const matchesGlutenFree = !filters.glutenFree || item.dietary?.glutenFree;
      const matchesSpicy = !filters.spicy || item.dietary?.spicy;
      
      let matchesPriceRange = true;
      if (filters.priceRange !== 'all') {
        const price = parseInt(item.price);
        matchesPriceRange = filters.priceRange === 'under50' ? price < 50 :
                           filters.priceRange === '50to100' ? price >= 50 && price <= 100 :
                           price > 100;
      }

      return matchesSearch && matchesVegetarian && matchesGlutenFree && 
             matchesSpicy && matchesPriceRange;
    });
  };

  const filteredItems = filterItems(menuItems);

  return (
    <section id="menu" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium mb-4 dark:text-white flex items-center justify-center gap-2">
            <ChefHat className="w-8 h-8" />
            Our Menu
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our carefully curated selection of authentic Japanese dishes
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                       focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <MenuFilters filters={filters} setFilters={setFilters} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <DishCard key={item.name} dish={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No dishes found matching your criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
}