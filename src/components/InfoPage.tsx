import React from 'react';
import { Link } from 'react-router-dom';

const InfoPage: React.FC = () => {
  const categories = [
    {
      title: 'Coffees',
      description: 'Expertly crafted coffee drinks made with locally roasted beans',
      image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=500'
    },
    {
      title: 'Teas',
      description: 'A selection of fine teas from around the world',
      image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500'
    },
    {
      title: 'Cakes',
      description: 'Freshly baked cakes and pastries to complement your drink',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'
    },
    {
      title: 'Hot Chocolate',
      description: 'Rich and creamy hot chocolate made with premium cocoa',
      image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Van Image */}
      <div className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920")',
        backgroundPosition: 'center 80%'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Mobile Coffee Experience</h1>
            <p className="text-xl md:text-2xl">Bringing quality coffee, teas and cakes to Orkney</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Welcome to A Good Cuppa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           We can’t wait to share our passion for great quality food and drink with you.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category) => (
            <Link 
              key={category.title}
              to={`/category/${category.title.toLowerCase()}`}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: `url(${category.image})`
              }} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Location Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-lg text-gray-600 mb-4">
                You will find us at the <strong>Sea Cadets’ carpark, Scapa overlooking the beautiful Scapa Beach,</strong> within walking distance or a few minutes drive from Kirkwall town.  We are on the St Magnus Way pilgrimage route and a popular beach for sea swimmers, families and dog walkers. 
              </p>
              <ul className="space-y-2 text-gray-600">
                <li><strong>We are open: Thursdays, Fridays, Saturdays and Sundays 10:30 am till 3:30pm</strong></li>
              </ul>
            </div>
            <div className="h-[300px] bg-cover bg-center rounded-lg" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000")',
              backgroundPosition: 'center'
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;