import React from "react";
interface SessionsCard {
  MovieTime: any;
  MovieName: string | number;
  AdultTicketCount: number;
  ChildTicketCount: number;
  VipTicketCount: number;
}

const SessionsCard = ({
  MovieTime,
  MovieName,
  AdultTicketCount,
  ChildTicketCount,
  VipTicketCount,
}: SessionsCard) => {
  return (
    <div className="bg-[#0e7490] w-full text-white rounded ">
      <div className="flex flex-row">
        <div className="pl-[10%] flex items-center">
          <p className="">{MovieTime}</p>
        </div>{" "}
        <span className=" bg-white w-px min-h-[1em] ml-[10%] my-2" />
        <div className="pl-[10%]">
          <p className="text-xl font-bold">{MovieName}</p>
          <div className="flex flex-row  gap-x-[200%] ">
            <p>{AdultTicketCount}</p>
            <p>{ChildTicketCount}</p>
            <p>{VipTicketCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsCard;
