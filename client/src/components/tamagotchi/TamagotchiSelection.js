import React from 'react';

const TAMAGOTCHI_OPTIONS = [
  {
    id: 1,
    name: 'Fitness Fox',
    description: 'A quick and agile companion that loves cardio workouts',
    baseStats: {
      happiness: 50,
      energy: 50,
      evolutionLevel: 1
    },
    sprite: {
      neutral: '/sprites/fox-neutral.png',
      happy: '/sprites/fox-happy.png',
      sad: '/sprites/fox-sad.png',
      tired: '/sprites/fox-tired.png'
    }
  },
  {
    id: 2,
    name: 'Strength Bear',
    description: 'A powerful friend that excels in strength training',
    baseStats: {
      happiness: 50,
      energy: 50,
      evolutionLevel: 1
    },
    sprite: {
      neutral: '/sprites/bear-neutral.png',
      happy: '/sprites/bear-happy.png',
      sad: '/sprites/bear-sad.png',
      tired: '/sprites/bear-tired.png'
    }
  },
  {
    id: 3,
    name: 'Flexi Frog',
    description: 'A flexible partner perfect for yoga and stretching',
    baseStats: {
      happiness: 50,
      energy: 50,
      evolutionLevel: 1
    },
    sprite: {
      neutral: '/sprites/frog-neutral.png',
      happy: '/sprites/frog-happy.png',
      sad: '/sprites/frog-sad.png',
      tired: '/sprites/frog-tired.png'
    }
  }
];

const TamagotchiSelection = ({ onSelect }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Workout Companion</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TAMAGOTCHI_OPTIONS.map(tamagotchi => (
          <div 
            key={tamagotchi.id}
            className="border rounded-lg p-4 hover:border-blue-500 transition duration-300 cursor-pointer"
            onClick={() => onSelect(tamagotchi)}
          >
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 relative">
                <img 
                  src={tamagotchi.sprite.neutral} 
                  alt={tamagotchi.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-center mb-2">{tamagotchi.name}</h3>
            <p className="text-gray-600 text-center mb-4">{tamagotchi.description}</p>
            
            <div className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(tamagotchi);
                }}
              >
                Select {tamagotchi.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TamagotchiSelection; 