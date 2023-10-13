import { Button } from "./Components/Buttons";
import MovieCard from "./Components/MovieCard";
import PaymentHistory from "./Components/PaymentHistory";
import SeatSelected from "./Components/Seat";
import SessionsCard from "./Components/SessionsCard";
import TopBar from "./Components/TobBar";
import { DefaultAvatar } from "./assets/Icons";

function App() {
  return (
    <div>
      <Button
        ButtonName={"press"}
        className="bg-[#fb923c] text-white rounded py-1 px-1 font-semibold"
      />
      <MovieCard MovieGenre={"Action"} MovieName={"Jawan"} />
      <PaymentHistory
        MovieDate="21/2/2023"
        MovieName={"Jawan"}
        TheatreName={"GKcinema"}
        src={<DefaultAvatar className={"pt-1"} />}
      />
      <SeatSelected />
      <SessionsCard
        MovieName="jawan"
        MovieTime="12:12"
        AdultTicketCount={12}
        ChildTicketCount={23}
        VipTicketCount={12}
      />
      <TopBar ScreenSubtitle="jawan" ScreenTitle="bhavadharani" />
    </div>
  );
}

export default App;
