import React from 'react';
import style from './AviaThereAndBackInfo.module.css'
import {CardThereAndBack} from "../CardThereAndBack/CardThereAndBack";

type AviaThereAndBackInfoProps = {
    departureCity: string,
    arrivalCity: string,
    dateThere: string,
    dateBack: string,
}

export const AviaThereAndBackInfo = (props: AviaThereAndBackInfoProps) => {

    return (
            <div className={style.container}>
                <div className={style.wrapper_1}>
                    <CardThereAndBack departureCity={props.departureCity}
                                      arrivalCity={props.arrivalCity}
                                      date={props.dateThere}
                                        />
                </div>
                <div className={style.line}></div>
                <div className={style.price}>8300</div>
                <div className={style.wrapper_2}>
                    <CardThereAndBack departureCity={props.arrivalCity}
                                      arrivalCity={props.departureCity}
                                      date={props.dateBack}/>
                </div>
            </div>

    );
};

