import { useEffect, useState } from "react";
import MatchList from "./components/MatchList";
import useLiveEvents from "../../hooks/useLiveEvents";
import LiveOptions from "./components/LiveOptions";
import CalendarCard from "./components/Calendar";
import type { EventButton } from "../../types/index";
import LiveIcon from '../../assets/LiveIcon.svg?react';
import HeartIcon from '../../assets/HeartIcon.svg?react';


const Match = () => {
    const { events } = useLiveEvents();
    const [options,setOptions] = useState<EventButton[]>([])

   useEffect(() => {
  if (!events || events.length === 0) return;

  // totalEvents
  const totalEvents = events.reduce(
    (acc, event) => acc + (event.eventDetail?.length || 0),
    0
  );

  // liveEvents
  const liveEvents = events.reduce(
    (acc, event) =>
      acc +
      (event.eventDetail?.filter(
        (detail) => detail.liveTime !== "NS" && detail.liveTime !== "FT"
      ).length || 0),
    0
  );

  setOptions([
    {
      id: 1,
      buttonTitle: "All",
      buttonIcon: null,
      buttonCountBadge: totalEvents,
      buttonIsActive: true,
    },
    {
      id: 2,
      buttonTitle: "Live",
      buttonIcon: LiveIcon,
      buttonCountBadge: liveEvents,
      buttonIsActive: false,
    },
    {
      id: 3,
      buttonTitle: "Favorites",
      buttonIcon: HeartIcon,
      buttonCountBadge: 2,
      buttonIsActive: false,
    },
  ]);
}, [events]);


   
    return (
        <div className="flex flex-col gap-[16px] p-[16px]">
            <div className="hidden lg:block">
                <h3 className="text-[20px] font-[500] leading-[26px] text-white">Matches</h3>
            </div>

            <div>
                <CalendarCard />
            </div>

            <div>
               {options.length > 0 && <LiveOptions options={options} />}
            </div>



            <MatchList matchListData={events} />


        </div>
    );
}
export default Match;