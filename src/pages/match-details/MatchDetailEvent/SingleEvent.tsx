import ArrowsIcon from '../../../assets/ArrowsIcon.svg?react';
import InjuryIcon from '../../../assets/InjuryIcon.svg?react'
import RedCardFlat from '../../../assets/RedCardFlat.svg?react';
import YellowCardFlat from '../../../assets/YellowCardFlat.svg?react';
import BallIcon from '../../../assets/BallIcon.svg?react';
import FlagIcon from '../../../assets/FlagIcon.svg?react';
import type { MatchHistoryType } from '../../../types';
import HomeTeamSingleEvent from './HomeTeamSingleEvent';
import AwayTeamSingleEvent from './AwayTeamSingleEvent';

interface propType {
    history: MatchHistoryType;
}
const SingleEvent = ({ history }: propType) => {
    console.log("history list");
    console.log(history);
    return (
        <div className="flex flex-row gap-[4px] w-full items-center">
            {/* home team event at time t*/}
            {/* <HomeTeamSingleEvent upperTitle={history?.playerIn ?? ""} lowerTitle={history?.playerOut ?? ""} Icon={FlagIcon} /> */}
            {history?.teamType === "homeTeam" ?
                history?.type == "change" ?
                    <HomeTeamSingleEvent upperTitle={history?.playerIn ?? ""} lowerTitle={history?.playerOut ?? ""} Icon={ArrowsIcon} />
                    : history.type == "injury" ?
                        <HomeTeamSingleEvent upperTitle={history?.playerAffected ?? ""} lowerTitle={"Injury"} Icon={InjuryIcon} />
                        : history.type == "red" ?
                            <HomeTeamSingleEvent upperTitle={history?.playerAffected ?? ""} lowerTitle={"Sent off"} Icon={RedCardFlat} />
                            : history.type == "yellow" ?
                                <HomeTeamSingleEvent upperTitle={history?.playerAffected ?? ""} lowerTitle={" "} Icon={YellowCardFlat} />
                                : history.type == "goal" ?
                                    <HomeTeamSingleEvent upperTitle={history?.goalPlayerName ?? ""} lowerTitle={history?.assistPlayerName??""} Icon={BallIcon} />
                                    : history.type == "corner" ?
                                        <HomeTeamSingleEvent upperTitle={history?.title ?? ""} lowerTitle={""} Icon={FlagIcon} />
                                        : <div className="w-[309.5px] flex flex-row gap-[10px] justify-end items-center">
                                            &nbsp;
                                        </div>
                :
                // placeholder
                 <div className="w-[309.5px] flex flex-row gap-[10px] justify-start items-center">
                        &nbsp; 
                    </div>




            }



            {/* time instance */}
            <div className='w-[48px] h-[19px] rounded-[100px] px-[8px] py-[2px] bg-[#26273B] items-center justify-center flex'>
                <span className='font-[400] text-[11px] text-white leading-[15px] justfy-center items-center'>{history?.time}</span>
            </div>


            {history?.teamType === "awayTeam" ?
                history?.type === "change" ?
                    <AwayTeamSingleEvent upperTitle={history?.playerIn ?? ""} lowerTitle={history?.playerOut ?? ""} Icon={ArrowsIcon} />
                    : history.type == "injury" ?
                        <AwayTeamSingleEvent upperTitle={history?.playerAffected ?? ""} lowerTitle={"Injury"} Icon={InjuryIcon} />
                        : history.type == "red" ?
                            <AwayTeamSingleEvent upperTitle={history?.playerAffected ?? ""} lowerTitle={"Sent off"} Icon={RedCardFlat} />
                            : history.type == "yellow" ?
                                <AwayTeamSingleEvent upperTitle={history?.playerAffected ?? ""} lowerTitle={" "} Icon={YellowCardFlat} />
                                : history.type == "goal" ?
                                    <AwayTeamSingleEvent upperTitle={history?.goalPlayerName ?? ""} lowerTitle={history?.assistPlayerName??""} Icon={BallIcon} />
                                    : history.type == "corner" ?
                                        <AwayTeamSingleEvent upperTitle={history?.title ?? ""} lowerTitle={""} Icon={FlagIcon} />
                                        : <div className="w-[309.5px] flex flex-row gap-[10px] justify-end items-center">
                                            &nbsp;
                                        </div>
                : <></>




            }

            {/* <AwayTeamSingleEvent upperTitle={history?.playerIn ?? ""} lowerTitle={history?.playerOut ?? ""} Icon={FlagIcon} /> */}




        </div>
    );
}
export default SingleEvent;