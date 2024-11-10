import React from 'react';
import { Product, Category } from '../types';
import { ProductCard } from './ProductCard';

interface CategoryGridProps {
  products: Product[];
  category: Category;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ products, category }) => {
  const filteredProducts = React.useMemo(() => 
    products.filter((product) => product.category.toLowerCase() === category.toLowerCase()),
    [products, category]
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products available in {category}.</p>
      </div>
    );
  }

  return (
    <div className="mt-[50px]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;