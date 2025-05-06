import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Tamagotchi from '../tamagotchi/Tamagotchi';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [tamagotchi, setTamagotchi] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTamagotchi = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        if (userDoc.exists()) {
          setTamagotchi(userDoc.data().tamagotchi);
        }
      }
      setLoading(false);
    };

    fetchTamagotchi();
  }, [currentUser]);

  const updateTamagotchi = async (newStats) => {
    if (!currentUser) return;

    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, {
      'tamagotchi': {
        ...tamagotchi,
        ...newStats
      }
    });
    setTamagotchi(prev => ({ ...prev, ...newStats }));
  };

  const handleFeed = async () => {
    if (tamagotchi.energy < 100) {
      await updateTamagotchi({
        energy: Math.min(tamagotchi.energy + 20, 100),
        happiness: Math.min(tamagotchi.happiness + 10, 100)
      });
    }
  };

  const handlePlay = async () => {
    if (tamagotchi.energy > 20) {
      await updateTamagotchi({
        energy: Math.max(tamagotchi.energy - 20, 0),
        happiness: Math.min(tamagotchi.happiness + 20, 100)
      });
    }
  };

  const handleRest = async () => {
    await updateTamagotchi({
      energy: Math.min(tamagotchi.energy + 30, 100),
      happiness: Math.max(tamagotchi.happiness - 10, 0)
    });
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!tamagotchi) {
    return <div className="flex justify-center items-center h-screen">No Tamagotchi selected yet!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-8">Your Workout Companion</h1>
          
          <Tamagotchi 
            tamagotchi={{
              ...tamagotchi,
              onFeed: handleFeed,
              onPlay: handlePlay,
              onRest: handleRest
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 