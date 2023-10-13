import React from "react";
// import { Occupied } from '../../assets/Icons'
import { Occupied } from "../../assets/Icons";

const SeatSelected = () => {
  return (
    <div className="box-border w-7 h-7 bg-[#fb923c] rounded-md ">
      <p className="text-white text-center text-xs font-bold items-center pt-1">
        1
      </p>
    </div>
  );
};
export default SeatSelected;

// export const SeatNotSelected = () => {

//   return (
//     <div className='box-border w-7 h-7 bg-[#fb923c] rounded-md '>
//       <p className='text-white text-center text-xs font-bold items-center pt-1'>2</p>
//     </div>
//   )
// }

// export const SeatOccupied = () => {

//   return (
//     <div className='box-border w-7 h-7 bg-[#fb923c] rounded-md '>
//       <p className='text-white text-center text-xs font-bold items-center pt-1'><Occupied /></p>
//     </div>
//   )
// }

// export const SeatStatus = () => {

//   if (SeatSelected) {
//     return <SeatSelected />
//   }
//   else if (SeatNotSelected){
//   return <SeatNotSelected />}
//   else  { return <Occupied />}

// }
