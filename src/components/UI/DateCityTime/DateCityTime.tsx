import React from 'react';
import style from './DateCityTime.module.css'
import {TimeRange} from "../../../types/type";

type DateCityTimeProps = {
    departureCity: string,
    arrivalCity: string,
    date: string
    time: TimeRange
}

export const DateCityTime = (props: DateCityTimeProps) => {
    return (
        <>
            <div className={style.departure_data}>
                <div>
                    <div className={style.time}>
                        {props.time.startTime}
                    </div>
                    <div className={style.city_data}>
                        {props.departureCity}
                        <div>{props.date}</div>
                    </div>
                </div>
            </div>
            <div className={style.arrival_date}>
                <div>
                    <div className={style.time}>
                        {props.time.endTime}
                    </div>
                    <div className={style.city_data}>
                        {props.arrivalCity}
                        <div>{props.date}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

