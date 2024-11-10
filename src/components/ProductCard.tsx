import React from 'react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { useSettingsStore } from '../store/settingsStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedOptionId, setSelectedOptionId] = React.useState<string>('');
  const addItem = useCartStore((state) => state.addItem);
  const { settings } = useSettingsStore();

  const availableOptions = React.useMemo(() => {
    if (!settings || !product.availableOptions) return [];
    return settings.productOptions.filter(option => 
      product.availableOptions?.includes(option.id)
    );
  }, [product.availableOptions, settings]);

  const handleAddToCart = () => {
    addItem({
      product,
      quantity: 1,
      selectedOption: selectedOptionId || undefined
    });
  };

  const selectedOption = availableOptions.find(opt => opt.id === selectedOptionId);
  const totalPrice = product.price + (selectedOption?.price || 0);
  const hasOptions = availableOptions && availableOptions.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-3 flex flex-col h-full">
      <div className="relative w-full h-[150px] mb-2">
        <img 
          src={product.image} 
          alt={product.name}
          width={200}
          height={150} 
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <h3 className="text-sm font-semibold mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto space-y-2">
          <p className="text-sm font-bold">
            £{totalPrice.toFixed(2)}
            {selectedOption && (
              <span className="text-xs font-normal text-gray-600 ml-1">
                (Base: £{product.price.toFixed(2)} + {selectedOption.title}: £{selectedOption.price.toFixed(2)})
              </span>
            )}
          </p>

          {hasOptions && (
            <select
              value={selectedOptionId}
              onChange={(e) => setSelectedOptionId(e.target.value)}
              className="w-full p-1 text-xs border rounded"
            >
              <option value="">Select Options (Milk etc)</option>
              {availableOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.title} (+£{option.price.toFixed(2)})
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-1 px-2 rounded text-xs hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};