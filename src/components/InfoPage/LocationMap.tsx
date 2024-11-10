import React from 'react';

interface LocationMapProps {
  image: string;
}

export const LocationMap: React.FC<LocationMapProps> = ({ image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Find Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            You will find us at the Sea Cadets’ carpark, Scapa overlooking the beautiful Scapa Beach, within walking distance or a few minutes drive from Kirkwall town.  We are on the St Magnus Way pilgrimage route and a popular beach for sea swimmers, families and dog walkers.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Thursday, Firday, Saturday and Sundays, 10:30am - 3:30pm</li>
            
          </ul>
        </div>
        <div 
          className="h-[300px] bg-cover bg-center rounded-lg" 
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center'
          }} 
        />
      </div>
    </div>
  );
};