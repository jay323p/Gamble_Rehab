import React, { useEffect, useState } from 'react';
import Navbar from '../components/landing/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { selectGameData } from '../redux/features/auth/authSlice';
import KenoSession from '../components/learn/KenoSession';
import NumbersSession from '../components/learn/NumbersSession';
import PowerballSession from '../components/learn/PowerballSession';
import ScratchersSession from '../components/learn/ScratchersSession';
import SlotsSession from '../components/learn/SlotsSession';

const Learn = () => {
    const gameDataRedux = useSelector(selectGameData)
    const [gameChosen, setGameChosen] = useState('')
    const [historyIndex, setHistoryIndex] = useState()
    const [gameSessions, setGameSessions] = useState()
    const [session, setSession] = useState()

    const changeGameSessions = () => {
        const desiredSessions = gameDataRedux.savedGames.filter((game) => game.game === gameChosen)
        setGameSessions(desiredSessions)
        setSession(desiredSessions[0])
        setHistoryIndex(0)
    }

    const updateViewedSession = (game, i) => {
        setSession(game)
        setHistoryIndex(i)
    }

    useEffect(() => {
        if (gameChosen !== '') {
            changeGameSessions()
        }
    }, [gameChosen])
    return <div className='h-[100vh] w-[100vw] flex flex-col'>
        <Navbar />
        <div className='h-[94%] w-full p-[1rem] z-50'>
            <div className='h-full w-full flex flex-col shadow3 rounded-sm'>
                {/* CHOOSE GAME BOX */}
                <div className='h-1/6 w-full flex flex-col shadow3 bg-lightGreen'>
                    <div className='h-[30%] w-full flex justify-center items-center bg-dark shadow3'>
                        <div className='linearGradientText1 font-semibold text-[18px] tall:text-[20px]'>Choose Game</div>
                    </div>
                    <div className='h-[70%] w-full flex justify-center items-center gap-[4px] p-[4px]'>
                        <button className={`${gameChosen === 'Keno' ? 'bg-lightGreen text-dark' : 'text-lightGreen bg-dark'} h-full w-full  rounded-sm font-semibold hover1`} onClick={(e) => setGameChosen(e.target.innerText)}>Keno</button>
                        <button className={`${gameChosen === 'Numbers' ? 'bg-lightGreen text-dark' : 'text-lightGreen bg-dark'} h-full w-full  rounded-sm  font-semibold hover1`} onClick={(e) => setGameChosen(e.target.innerText)}>Numbers</button>
                        <button className={`${gameChosen === 'Powerball' ? 'bg-lightGreen text-dark' : 'text-lightGreen bg-dark'} h-full w-full  rounded-sm  font-semibold hover1`} onClick={(e) => setGameChosen(e.target.innerText)}>Powerball</button>
                        <button className={`${gameChosen === 'Scratchers' ? 'bg-lightGreen text-dark' : 'text-lightGreen bg-dark'} h-full w-full  rounded-sm  font-semibold hover1`} onClick={(e) => setGameChosen(e.target.innerText)}>Scratchers</button>
                        <button className={`${gameChosen === 'Slots' ? 'bg-lightGreen text-dark' : 'text-lightGreen bg-dark'} h-full w-full  rounded-sm  font-semibold hover1`} onClick={(e) => setGameChosen(e.target.innerText)}>Slots</button>
                    </div>
                </div>
                {/* SHOW HISTORY BOX */}
                <div className='h-4/6 w-full shadow3'>
                    {gameChosen === 'Keno' ? <KenoSession session={session} /> : gameChosen === 'Numbers' ? <NumbersSession session={session} /> : gameChosen === 'Powerball' ? <PowerballSession session={session} /> : gameChosen === 'Scratchers' ? <ScratchersSession session={session} /> : gameChosen === 'Slots' ? <SlotsSession session={session} /> : ''}
                </div>
                {/* CHOOSE HISTORY SESSION BOX */}
                <div className='h-1/6 w-full shadow3 flex-col shadow3 bg-lightGreen'>
                    <div className='h-[30%] w-full flex justify-center items-center bg-dark shadow3'>
                        <div className='linearGradientText1 font-semibold text-[18px] tall:text-[20px]'>Choose Session</div>
                    </div>
                    <div className='h-[70%] w-full flex flex-col overflow-y-scroll bg-dark shadow3'>
                        {gameSessions && gameSessions.map((game, i) => {
                            return <div className={`${historyIndex === i ? 'bg-lightGreen' : 'linearGradientText1'} h-1/4 w-full flex justify-evenly items-center greenUnderline hover2`} onClick={() => updateViewedSession(game, i)}>
                                <div className='w-[20%]'>Game {i + 1}</div>
                                <div className='w-[25%] text-[14px]'>${game.moneyStats.wagered}-Wager</div>
                                <div className='w-[22.5%] text-[14px]'>Won ${game.moneyStats.won}</div>
                                <div className='w-[22.5%] text-[14px]'>Profit ${game.moneyStats.profit}</div>
                            </div>
                        })}
                    </div>

                </div>

            </div>
        </div>
    </div>;
};

export default Learn;

// in this page, we will get all the savedGames and show each history along with moneyStats
// there will be a selector  to select which game's history and money stats will be displayed
// render histories style differently from each other so will need components and conditional rendering
