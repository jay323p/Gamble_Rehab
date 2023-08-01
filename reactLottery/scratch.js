<div className="flex flex-col lg:flex-row mt-[5.8rem] md:mt-[10rem] lg:mt-[5rem] justify-around items-center h-1/3 tall:h-[40%] tall:mt-[7rem] tall:gap-[0rem] w-[90%] gap-[1.5rem] ml-auto mr-auto ">
  <div className="h-full w-full text-center">
    <div className="text-[24px] mb-[-2.5rem] w-full text-brilliantGreen font-semibold brightness-125">
      Games
    </div>
    <div className="bg-heroBorder opacity-75 h-1/2 lg:h-full w-full ml-auto mr-auto mt-[10px] text-slate-500  relative top-[30px] flex flex-col overflow-y-scroll items-center">
      {houseEdges.map((game) => {
        return (
          <motion.div
            key={game.name}
            className="text-[18px] lg:text-[20px] text-brilliantGreen brightness-150 w-full text-center bg-heroGreen h-full pb-[-1rem]"
            whileHover={{
              scaleX: 0.9,
              opacity: 1,
              background:
                'linear-gradient(45deg, #0D9B5C, #000, #000, #000, #0D9B5C)',
              cursor: 'pointer',
            }}
            transition={{ duration: 0.2 }}
            onClick={() => setGame(game.name)}
          >
            {game.name}
          </motion.div>
        );
      })}
    </div>
  </div>
  <div className="h-full w-full text-center">
    <div className="text-[24px] w-full mb-[5.1rem] text-brilliantGreen font-semibold mt-[-6rem] lg:mt-[0rem] brightness-125">
      Learn More
    </div>
    <div className="bg-heroGreen h-full w-full ml-auto mr-auto mt-[-7rem]   relative top-[30px] overflow-y-scroll">
      <p className="h-[240px] md:h-[260px] lg:h-full lg:p-[2rem] w-full p-[7px] text-left text-slate-400 bg-heroGreen brightness-150 overflow-y-scroll">
        <span className="block h-[120px] overflow-y-scroll bg-heroBorder opacity-70 text-black px-[10px]">
          {rules}
        </span>
        {types &&
          types.map((item) => {
            return (
              <>
                <motion.div
                  whileHover={{
                    opacity: 1,
                    color: '#0D9B5C',
                    background:
                      'linear-gradient(45deg, #000, #000, #000, rgba(13, 155, 91, 0.2), rgba(13, 155, 91, 0.4), rgba(13, 155, 91, 0.6))',
                    cursor: '',
                  }}
                >
                  <span
                    className={`block ${
                      item.edge < 2
                        ? 'text-brilliantGreen'
                        : 2 < item.edge > 5
                        ? 'text-yellow-200'
                        : 'text-red-600'
                    } text-brilliantGreen text-left mt-[10px] pl-[10px] pb-[10px]`}
                  >
                    {item.name} ------------ House-Edge: {item.edge}% [
                    {item.edge < 2
                      ? 'OK'
                      : 2 < item.edge > 5
                      ? 'YIELD'
                      : 'DANGER'}{' '}
                    ]
                  </span>
                </motion.div>
              </>
            );
          })}
      </p>
    </div>
  </div>
</div>;
