import React from 'react';

const ProductCard = ({ product }) => {
    if (!product) {
        console.error("ProductCard called without product");
        return null;  // This will prevent any further rendering if product is undefined.
      }
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {/* Image Carousel Placeholder */}
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        {/* Carousel Navigation Placeholder */}
        <div className="absolute top-2 left-2 text-xs bg-purple-700 text-white px-2 py-1 rounded">Electronics</div>
        <div className="absolute top-2 right-2 text-xs text-white">{product.date}</div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-sm">{product.description}</p>
        <div className="flex justify-between items-center mt-2 mb-2">
          <span className="text-lg font-bold">${product.price}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400 text-xs">Sold: {product.sold} | Remaining: {product.remaining}</span>
          <div className="flex items-center">
            <button className="text-purple-500 hover:text-purple-700">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">{/* Heart icon */}</svg>
            </button>
            <button className="text-purple-500 hover:text-purple-700 ml-2">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">{/* Share icon */}</svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white transition duration-150">Add</button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition duration-150">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
