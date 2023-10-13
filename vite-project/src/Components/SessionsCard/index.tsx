import React from "react";

type SessionsCardProps = {
  MovieTime: string;
  MovieName: string;
  AdultTicketCount: number;
  ChildTicketCount: number;
  VipTicketCount: number;
};

const SessionsCard = ({
  MovieTime,
  MovieName,
  AdultTicketCount,
  ChildTicketCount,
  VipTicketCount,
}: SessionsCardProps) => {
  return (
    <div className="backdrop-blur-sm bg-white/30 w-full text-white rounded ">
      <div className="flex flex-row">
        <div className="pl-[10%] flex items-center">
          <p className="">{MovieTime}</p>
        </div>
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
