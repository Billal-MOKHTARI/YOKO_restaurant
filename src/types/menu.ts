export interface MenuItem {
  name: string;
  price: string;
  desc: string;
  image: string;
  ingredients: string[];
  dietary?: {
    vegetarian?: boolean;
    spicy?: boolean;
    glutenFree?: boolean;
  };
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  preparationTime?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}