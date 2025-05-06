import React, { useState } from 'react';
import Tamagotchi from '../components/tamagotchi/Tamagotchi';
import TamagotchiSelection from '../components/tamagotchi/TamagotchiSelection';

const Dashboard = () => {
  const [selectedTamagotchi, setSelectedTamagotchi] = useState(null);
  const [goals, setGoals] = useState([
    { id: 1, title: 'Daily Workout', completed: false },
    { id: 2, title: 'Weekly Cardio', completed: false },
  ]);

  const toggleGoal = (id) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const handleFeed = () => {
    if (selectedTamagotchi) {
      setSelectedTamagotchi({
        ...selectedTamagotchi,
        happiness: Math.min(100, selectedTamagotchi.happiness + 10),
        energy: Math.min(100, selectedTamagotchi.energy + 5)
      });
    }
  };

  const handlePlay = () => {
    if (selectedTamagotchi) {
      setSelectedTamagotchi({
        ...selectedTamagotchi,
        happiness: Math.min(100, selectedTamagotchi.happiness + 5),
        energy: Math.max(0, selectedTamagotchi.energy - 10)
      });
    }
  };

  const handleRest = () => {
    if (selectedTamagotchi) {
      setSelectedTamagotchi({
        ...selectedTamagotchi,
        energy: Math.min(100, selectedTamagotchi.energy + 20)
      });
    }
  };

  return (
    <div className="space-y-8">
      {selectedTamagotchi ? (
        <Tamagotchi
          name={selectedTamagotchi.name}
          stage="Basic"
          happiness={selectedTamagotchi.happiness}
          energy={selectedTamagotchi.energy}
          evolutionLevel={selectedTamagotchi.evolutionLevel}
          onFeed={handleFeed}
          onPlay={handlePlay}
          onRest={handleRest}
        />
      ) : (
        <TamagotchiSelection onSelect={setSelectedTamagotchi} />
      )}

      {/* Goals Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
        <div className="space-y-4">
          {goals.map(goal => (
            <div 
              key={goal.id} 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <span className={goal.completed ? 'line-through text-gray-500' : ''}>
                {goal.title}
              </span>
              <button
                onClick={() => toggleGoal(goal.id)}
                className={`px-4 py-2 rounded ${
                  goal.completed 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white transition duration-300`}
              >
                {goal.completed ? 'Completed' : 'Mark Complete'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Your Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold">Workouts This Week</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold">Calories Burned</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold">Goals Completed</h3>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 