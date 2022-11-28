import React, {useState} from 'react';
import {FlightPlan} from "../UI/FlightPlan/FlightPlan";
import {Icon} from "../UI/Icon/Icon";
import {LogoAndTitle} from "../UI/LogoAndTitle/LogoAndTitle";
import {DateCityTime} from "../UI/DateCityTime/DateCityTime";

type AviaBackAndForthInfoProps = {
    departureCity: string,
    arrivalCity: string,
    date: string
}

export const CardThereAndBack = (props: AviaBackAndForthInfoProps) => {

    const [time, setTime] = useState({startTime: '22:57', endTime: '11:05'})

    return (
        <>
            <LogoAndTitle/>
            <DateCityTime departureCity={props.departureCity}
                          arrivalCity={props.arrivalCity}
                          date={props.date}
                          time={time}
            />
            <FlightPlan/>
            <Icon/>

        </>
    );
};

