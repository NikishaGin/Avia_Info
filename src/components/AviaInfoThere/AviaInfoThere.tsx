import React, {useState} from 'react';
import style from './AviaInfoThere.module.css'
import {TimeButton} from "./TimeButton/TimeButton";
import {TimeRange} from "../../types/type";
import {LogoAndTitle} from "../UI/LogoAndTitle/LogoAndTitle";
import {DateCityTime} from "../UI/DateCityTime/DateCityTime";
import {FlightPlan} from "../UI/FlightPlan/FlightPlan";
import {Icon} from "../UI/Icon/Icon";

type PropsType = {
    departureCity: string
    dateThere: string
    arrivalCity: string
}

export const AviaInfoThere = (props: PropsType) => {

    const [selectedTimeRange, setSelectedTimeRangeRange] = useState<TimeRange>(
        {startTime: '9:20', endTime: '11:05'})

    const [timeRanges, setTimeRanges] = useState([
        {
            startTime: '09:20', endTime: '11:05'
        },
        {
            startTime: '10:20', endTime: '12:05'
        },
        {
            startTime: '11:20', endTime: '13:05'
        },

    ] as TimeRange[])

    const onTimeButtonClickHandler = (timeRange: TimeRange) => {
        setSelectedTimeRangeRange(timeRange)
    }

    const getIsActive = (timeRange: TimeRange) => {
        return selectedTimeRange.startTime == timeRange.startTime && selectedTimeRange.endTime == timeRange.endTime
    }

    return (
        <div className={style.container}>
            <LogoAndTitle/>
            <div className={style.selected_time}>
                {timeRanges.map(timeRange => {
                    return <TimeButton key={timeRange.startTime + timeRange.endTime}
                                       timeRange={timeRange}
                                       onClick={onTimeButtonClickHandler}
                                       isActive={getIsActive(timeRange)}/>
                })}
            </div>
            <DateCityTime
                departureCity={props.departureCity}
                arrivalCity={props.arrivalCity}
                date={props.dateThere}
                time={selectedTimeRange}
            />
            <FlightPlan/>
            <Icon/>
            <div className={style.grid_price}>
                <div className={style.price}>
                    4 150
                </div>
            </div>
        </div>
    );
};
