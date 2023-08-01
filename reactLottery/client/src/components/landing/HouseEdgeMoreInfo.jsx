import React, { useState, useEffect } from 'react';
import { houseEdges } from '../../data/houseEdges';
import { motion } from 'framer-motion';

const HouseEdgeMoreInfo = () => {
  const [game, setGame] = useState('');
  const [rules, setRules] = useState(
    'Rules on how to play casino/lottery game.'
  );
  const [types, setTypes] = useState();

  useEffect(() => {
    console.log('game');
    console.log(typeof game);
    if (game !== '') {
      const desiredGame = houseEdges.filter((item) => item.name === game);

      if (desiredGame.length > 0) {
        setTypes(desiredGame[0].types);
        setRules(desiredGame[0].rules);
        console.log(types);
      }
      console.log(desiredGame);
    }
  }, [game]);
  return (
    <div className="flex bg-brilliantGreen h-full mt-[1.5rem] w-[90%] ml-auto mr-auto">
      <div className="bg-heroGreen shadow1 opacity-80  w-1/4 overflow-y-scroll">
        {' '}
      </div>
      <div className="bg-heroBorder shadow1 opacity-80 brightness-100 w-3/4"></div>
    </div>
  );
};

export default HouseEdgeMoreInfo;
