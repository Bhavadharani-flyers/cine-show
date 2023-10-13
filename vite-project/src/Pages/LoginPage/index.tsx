import React from "react";
import { Button } from "../../Components/Buttons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <div className="box-border border rounded-lg backdrop-blur-md bg-white/10 flex flex-col justify-center items-center  order-slate-700">
        <p className="text-xl text-white font-bold py-2 ">Login</p>
        <p className="text-base text-[#94a3b8] font-normal pb-2">
          Access to purchased tickets
        </p>
        <div className="flex flex-col gap-3 px-5 ">
          <input
            placeholder="Email ID"
            className="rounded h-12 indent-2 bg-[#0369a1] box-border border border-white w-72 "
          />
          <input
            placeholder="Password"
            className="rounded h-12 indent-2 bg-[#0369a1] box-border border border-white "
          />
        </div>
        <Link
          to="forgot"
          className="text-base text-[#94a3b8] font-normal pl-36 pt-2"
        >
          Forgot Password
        </Link>
        <div className="py-4   ">
          <Button
            className={"text-white bg-[#fb923c] w-72 h-12 font-bold  rounded"}
            ButtonName={"Continue"}
          />
        </div>
      </div>
      <Link
        to="/signup"
        className="text-base text-[#f8fafc] font-normal underline underline-offset-1 pt-2"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default Login;
