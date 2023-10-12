import React from "react";
import { Button } from "../../Components/Buttons";

const SignUp = () => {
  return (
    <div className="bg-[#0369a1] flex flex-col items-center h-screen justify-center">
      <div className="box-border border rounded-lg backdrop-blur-md bg-white/10 flex flex-col justify-center items-center  order-slate-700">
        <p className="text-xl text-white font-bold py-3 ">Sign Up</p>
        
        <div className="flex flex-col gap-3 px-5 ">
          <input placeholder="Email ID" className="rounded h-12 indent-2 bg-[#0369a1] box-border border border-white w-72 "/>
          <input placeholder="Confirm Password" className="rounded h-12 indent-2 bg-[#0369a1] box-border border border-white " />
          <input placeholder="Password" className="rounded h-12 indent-2 bg-[#0369a1] box-border border border-white " />
        </div>
<div className="py-4   "><Button className={"text-white bg-[#fb923c] w-72 h-12 font-bold  rounded"} ButtonName={"Continue"} /></div>
        
      </div>
    </div>
  );
};

export default SignUp;
