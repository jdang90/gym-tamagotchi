import React from 'react';
import { motion } from 'framer-motion';

const getEmotionState = (happiness, energy) => {
  if (happiness < 30) return 'sad';
  if (happiness > 70) return 'happy';
  if (energy < 30) return 'tired';
  return 'neutral';
};

const Tamagotchi = ({ tamagotchi }) => {
  // Determine which sprite to show based on happiness and energy levels
  const getCurrentSprite = () => {
    if (tamagotchi.happiness < 30) {
      return tamagotchi.sprite.sad;
    } else if (tamagotchi.energy < 30) {
      return tamagotchi.sprite.tired;
    } else if (tamagotchi.happiness > 70) {
      return tamagotchi.sprite.happy;
    }
    return tamagotchi.sprite.neutral;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">{tamagotchi.name}</h2>
        <p className="text-gray-600 capitalize">{getEmotionState(tamagotchi.happiness, tamagotchi.energy)} {tamagotchi.name}</p>
      </div>

      {/* Tamagotchi sprite with animation */}
      <div className="flex justify-center mb-6">
        <motion.div
          className="relative w-48 h-48"
          animate={{
            x: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src={getCurrentSprite()} 
            alt={`${tamagotchi.name} sprite`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* Stats */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Happiness</span>
            <span className="text-sm text-gray-600">{tamagotchi.happiness}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-600 h-2.5 rounded-full" 
              style={{ width: `${tamagotchi.happiness}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Energy</span>
            <span className="text-sm text-gray-600">{tamagotchi.energy}/100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${tamagotchi.energy}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={tamagotchi.onFeed}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Feed
        </button>
        <button
          onClick={tamagotchi.onPlay}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Play
        </button>
        <button
          onClick={tamagotchi.onRest}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Rest
        </button>
      </div>
    </div>
  );
};

export default Tamagotchi; 