import React from "react";
import ActionMovie from "../../assets/images/ActionMovie.png";

type PaymentHistoryProps = {
  src: any;
  MovieName: string | number;
  MovieDate: string;
  TheatreName: string | number;
};

const PaymentHistory = ({
  src,
  MovieName,
  MovieDate,
  TheatreName,
}: PaymentHistoryProps) => {
  return (
    <div className="flex flex-row text-white rounded">
      <img src={src} />
      <div className="flex flex-col pl-5 justify-center">
        <p className="text-base font-bold ">{MovieName}</p>
        <p className="text-sm font-medium">{MovieDate}</p>
        <p className="text-sm font-light">{TheatreName}</p>
      </div>
    </div>
  );
};

export default PaymentHistory;
