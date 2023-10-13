import React from "react";
import { DefaultAvatar } from "../../assets/Icons";
import { ActionMovie } from "../../assets/images";
interface PaymentHistory {
  src: any;
  MovieName: string | number;
  MovieDate: any;
  TheatreName: string | number;
}

const PaymentHistory = ({
  src,
  MovieName,
  MovieDate,
  TheatreName,
}: PaymentHistory) => {
  return (
    <div className="flex flex-row text-white bg-[#0369a1] rounded">
      <img src={ActionMovie} />
      <div className="flex flex-col pl-5 justify-center">
        <p className="text-base font-bold ">{MovieName}</p>
        <p className="text-sm font-medium">{MovieDate}</p>
        <p className="text-sm font-light">{TheatreName}</p>
      </div>
    </div>
  );
};

export default PaymentHistory;
