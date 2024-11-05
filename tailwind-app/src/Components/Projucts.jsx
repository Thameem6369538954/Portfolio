import React from 'react'
import PRA from '../images/PRA.png'

const Projucts = () => {
  return (
    <div>
      <div className="w-[100%] h-[100vh] bg-primary flex items-center justify-center relative ">
        <h1 className='text-7xl left-6 text-white font-poppins absolute top-10 after:contents-[""] after:block after:absolute after:top-8 after:left-full after:w-full after:h-1 after:rounded-[20px] after:bg-white'>
          Projucts
        </h1>

        <div className="grid grid-cols-2 w-[80%] gap-4">
          <div className="relative col-span-2 max-w-[70%]  m-[auto]">
            <img src={PRA} className="border border-white h-[200px] " alt="" />
          </div>
          <div>
            <img src={PRA} className="border border- h-[200px]" alt="" />
          </div>
          <div>
            <img
              src={PRA}
              className="border border-white row-span-2 h-[200px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projucts