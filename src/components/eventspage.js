import React from 'react'

const Eventspage = () => {
  return (

    <div className="flex items-center p-10 justify-around flex-row-reverse lg:flex-row lg:flex-col mt-8 p-10 ">
     <div className="lg:mt-5 flex flex-col mt-8 md:w-5/6 space-y-6 overflow-hidden shadow-md bg-slate-50">
              <img
          src="./birthday-cake.png"
          alt=""
          className=" object-center w-[500px] h-[500px] rounded-t-md  dark:bg-gray-500"
        />
     </div>
   
        <div className='flex mt-16 p-16 flex-col'>
        <h1 className="text-primaryDark  md:text-5xl text-5xl tracking-tighter font-bold">
          Birthday Bash <br />
          </h1>
          <p className='text-lg p-1'>Hosted by <span className='text-[#828282]'>Elsysia</span></p>
          <div className="flex flex-col gap-3 justify-center item-center">
            <div className="flex gap-6 items-center mb-3">
              <span className="bg-white shadow-md p-3 rounded">📅</span>
              <div className="flex flex-col ">
                <h4 className="font-bold  text-primaryDark">
                  18 August 6:00Pm
                </h4>
                <h5 className="">
                  to <span className="font-bold text-[#4F4F4F]">19 August</span>{" "}
                  1:00PM UTC +10
                </h5>
              </div>
            </div>
            <div className="flex gap-6 items-center mb-3">
              <span className="bg-white shadow-md p-3 rounded">📅</span>
              <div className="flex flex-col ">
                <h4 className="font-bold  text-primaryDark">
                 StreetName
                </h4>
                <h5 className="">
                  to <span className="font-bold text-[#4F4F4F]"></span>{" "}
                  Suburb, State, Postcode
                </h5>
              </div>
            </div>
            </div>
        </div>
      
      </div>
   
    
  )
}

export default Eventspage