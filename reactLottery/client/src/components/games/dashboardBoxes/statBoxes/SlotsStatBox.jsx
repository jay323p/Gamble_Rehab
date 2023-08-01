import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SET_READY_TO_SPIN,
  SET_RESET_SLOTS_MONEY_STATS,
  selectReadyToSpin,
  selectSlotMoneyStats,
} from '../../../../redux/features/games/slotSlice';

const SlotsStatBox = () => {
  const dispatch = useDispatch();

  const readyToSpinRedux = useSelector(selectReadyToSpin);
  const moneyStatsRedux = useSelector(selectSlotMoneyStats);

  const readyToSpin = () => {
    if (!readyToSpinRedux) {
      dispatch(SET_READY_TO_SPIN(true));
    } else {
      dispatch(SET_READY_TO_SPIN(false));
    }
  };

  const resetMoneyStats = () => {
    dispatch(SET_RESET_SLOTS_MONEY_STATS());
  };

  return (
    <div className="h-full w-full xl:w-[80%] ml-auto mr-auto p-[8px] flex flex-col">
      <div className="h-2/4 w-full flex justify-center items-center">
        <div className="w-1/3 h-full flex justify-center items-center">
          <span className="w-[45%] h-[80%] md:h-[60%] rounded-md border-b-4 border-red-900">
            <button className="w-full h-full font-bold text-dark bg-red-500 rounded-md slotBtn">
              STOP
            </button>
          </span>
        </div>
        <div className="w-1/3 h-full flex justify-center items-center">
          <span className="w-[45%] h-[80%] md:h-[60%] rounded-md border-b-4 border-red-900">
            <button className="w-full h-full font-bold text-dark bg-red-500 rounded-md slotBtn">
              STOP
            </button>
          </span>
        </div>
        <div className="w-1/3 h-full flex justify-center items-center">
          <span className="w-[45%] h-[80%] md:h-[60%] rounded-md border-b-4 border-red-900">
            <button className="w-full h-full font-bold text-dark bg-red-500 rounded-md slotBtn">
              STOP
            </button>
          </span>
        </div>
      </div>
      <div className="h-full w-full flex justify-between items-center">
        <div className="h-full w-1/2 flex justify-evenly items-center px-[8px]">
          <div
            className={`${
              moneyStatsRedux.profit < 0 ? 'bg-red-400' : 'bg-lightGreen'
            } h-[50%] w-full p-[2px] flex flex-col justify-center items-center`}
          >
            <div
              className={`${
                moneyStatsRedux.profit < 0 ? 'bg-red-600' : 'bg-darkGreen'
              } h-[98%] w-full flex justify-center items-center font-semibold rounded-sm text-[12px] tall:text-[16px] md:text-[22px]`}
            >
              ${moneyStatsRedux.profit}
            </div>
          </div>
          <div
            className={`bg-red-500 
             h-[50%] w-1/4 text-[12px] md:text-[20px] flex flex-col justify-center items-center font-bold`}
          >
            <button onClick={() => resetMoneyStats()}>RESET</button>
          </div>
        </div>
        <div className="h-1/2 w-1/2 rounded-lg border-b-4 border-darkGreen">
          <button
            className="h-full w-full font-extrabold text-dark bg-brilliantGreen rounded-md slotBtn md:text-[22px]"
            onClick={() => readyToSpin()}
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlotsStatBox;
