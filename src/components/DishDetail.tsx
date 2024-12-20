import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Clock, 
  ChefHat, 
  Share2, 
  Heart, 
  Printer,
  Star,
  Leaf, 
  Wheat, 
  Flame 
} from 'lucide-react';
import { menuItems } from '../data/menu';
import { BackButton } from './navigation/BackButton';
import type { MenuItem } from '../types/menu';

export function DishDetail() {
  const { dishName } = useParams();
  const [dish, setDish] = useState<MenuItem | undefined>();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundDish = menuItems.find(
      item => item.name.toLowerCase() === decodeURIComponent(dishName || '').toLowerCase()
    );
    setDish(foundDish);

    if (foundDish) {
      document.title = `${foundDish.name} - KŌYŌ Restaurant`;
    }
  }, [dishName]);

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-4">Dish not found</h2>
          <BackButton label="Return to menu" />
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: dish.name,
        text: dish.desc,
        url: window.location.href,
      });
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-medium mb-2">{dish.name}</h1>
          <p className="text-xl opacity-90">${dish.price}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <BackButton label="Back to Menu" />
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Share dish"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                         ${isFavorite ? 'text-red-500' : ''}`}
              aria-label="Add to favorites"
            >
              <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={handlePrint}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Print recipe"
            >
              <Printer className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-medium mb-4 dark:text-white">Description</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{dish.desc}</p>

            <div className="flex flex-wrap gap-4 mb-6">
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

            <h2 className="text-2xl font-medium mb-4 dark:text-white">Ingredients</h2>
            <ul className="list-disc list-inside mb-8 text-gray-600 dark:text-gray-300">
              {dish.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">{ingredient}</li>
              ))}
            </ul>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300">
                  Preparation: {dish.preparationTime || '30-45 minutes'}
                </span>
              </div>
              <div className="flex items-center">
                <ChefHat className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300">
                  Difficulty: {dish.difficulty || 'Medium'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-fit">
            <h3 className="text-lg font-medium mb-4 dark:text-white">
              Nutritional Information
            </h3>
            <div className="space-y-4">
              {dish.nutritionalInfo ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Calories</span>
                    <span className="font-medium dark:text-white">
                      {dish.nutritionalInfo.calories} kcal
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Protein</span>
                    <span className="font-medium dark:text-white">
                      {dish.nutritionalInfo.protein}g
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Carbs</span>
                    <span className="font-medium dark:text-white">
                      {dish.nutritionalInfo.carbs}g
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Fat</span>
                    <span className="font-medium dark:text-white">
                      {dish.nutritionalInfo.fat}g
                    </span>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  Nutritional information not available
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t dark:border-gray-700 pt-8">
          <h2 className="text-2xl font-medium mb-6 dark:text-white">Reviews</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 
                              flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-300 font-medium">JD</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="flex text-yellow-400 mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2 days ago
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Absolutely delicious! The presentation was beautiful and the flavors were 
                  perfectly balanced. Will definitely order again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}