
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  console.log("Products:", products);  // This will log the products array to the console.

  return (
    <div className="bg-black min-h-screen p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => {
          console.log("Rendering product:", product.name);  // Check if this log appears for each product
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;

