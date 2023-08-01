import React from 'react';
import GamesDashboard from '../components/games/GamesDashboard';
import Facts from '../components/landing/Facts';
import Hero from '../components/landing/Hero';
import Navbar from '../components/landing/Navbar';
import { useSelector } from 'react-redux';
import { selectGamePlaying } from '../redux/features/auth/authSlice';

const Games = () => {
  const gamePlayingRedux = useSelector(selectGamePlaying);

  return (
    <div className="h-[100vh] flex flex-col overflow-x-hidden overflow-y-hidden">
      <div
        className={`h-[100vh] flex flex-col ${
          gamePlayingRedux === 'Slots' ||
          gamePlayingRedux === 'Scratchers' ||
          gamePlayingRedux === 'Numbers'
            ? 'pb-[3rem]'
            : 'tall:pb-[1rem] lg:pb-[4rem]'
        }`}
      >
        <Navbar />
        <GamesDashboard />
      </div>
    </div>
  );
};

export default Games;
