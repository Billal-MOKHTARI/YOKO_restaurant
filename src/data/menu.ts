import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    name: 'Omakase Sushi',
    price: '120',
    desc: 'Chef\'s selection of premium seasonal fish, featuring the finest cuts of tuna, salmon, and daily special catches. Each piece is expertly crafted and garnished.',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80',
    ingredients: ['Seasonal Fish', 'Premium Rice', 'Wasabi', 'House-made Soy Sauce'],
    dietary: {
      glutenFree: true
    }
  },
  {
    name: 'A5 Wagyu',
    price: '95',
    desc: 'Grade A5 Japanese Wagyu beef, grilled to perfection and served with seasonal vegetables and house-made tare sauce.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
    ingredients: ['A5 Wagyu Beef', 'Seasonal Vegetables', 'Tare Sauce', 'Sea Salt'],
    dietary: {
      spicy: true
    }
  },
  {
    name: 'Tempura Platter',
    price: '45',
    desc: 'Assorted seasonal vegetables and seafood, lightly battered and fried to crispy perfection. Served with tentsuyu dipping sauce.',
    image: 'https://img.freepik.com/premium-photo/tempura-platter-advertising_1057389-21455.jpg',
    ingredients: ['Tiger Prawns', 'Seasonal Vegetables', 'Tentsuyu Sauce'],
  },
  {
    name: 'Vegetable Udon',
    price: '28',
    desc: 'Thick wheat noodles in a rich vegetable broth with seasonal mushrooms, topped with tempura vegetables and green onions.',
    image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&q=80',
    ingredients: ['Udon Noodles', 'Mushrooms', 'Green Onions', 'Tempura Vegetables'],
    dietary: {
      vegetarian: true
    }
  },
  {
    name: 'Miso Black Cod',
    price: '65',
    desc: 'Black cod marinated for 72 hours in our house-made miso blend, grilled and served with pickled vegetables.',
    image: 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?auto=format&fit=crop&q=80',
    ingredients: ['Black Cod', 'House-made Miso', 'Pickled Vegetables'],
    dietary: {
      glutenFree: true
    }
  },
  {
    name: 'Matcha Set',
    price: '18',
    desc: 'Ceremonial grade matcha tea served with traditional wagashi confections in a handcrafted ceramic bowl.',
    image: 'https://resources.matcha-jp.com/old_thumbnails/720x2000/2675.webp',
    ingredients: ['Ceremonial Matcha', 'Wagashi', 'Spring Water'],
    dietary: {
      vegetarian: true,
      glutenFree: true
    }
  }
];
