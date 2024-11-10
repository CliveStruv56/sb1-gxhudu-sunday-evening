import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryCard } from './CategoryCard';
import { LocationMap } from './LocationMap';
import { HeroSection } from './HeroSection';

// Using remote URLs for now
const IMAGES = {
  coffee: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=500',
  tea: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500',
  cake: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
  hotChocolate: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500',
  van: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920',
  location: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000'
};

const categories = [
  {
    title: 'Coffees',
    description: 'Expertly crafted coffee drinks made with locally roasted beans',
    image: IMAGES.coffee
  },
  {
    title: 'Teas',
    description: 'A selection of fine teas from around the world',
    image: IMAGES.tea
  },
  {
    title: 'Cakes',
    description: 'Freshly baked cakes and pastries to complement your drink',
    image: IMAGES.cake
  },
  {
    title: 'Hot Chocolate',
    description: 'Rich and creamy hot chocolate made with premium cocoa',
    image: IMAGES.hotChocolate
  }
];

const InfoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection image={IMAGES.van} />

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Welcome to A Good Cuppa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're passionate about bringing the finest coffee experience right to your neighborhood.
            Our mobile coffee van serves up delicious drinks and treats, made with care using premium ingredients.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

        <LocationMap image={IMAGES.location} />
      </div>
    </div>
  );
};

export default InfoPage;