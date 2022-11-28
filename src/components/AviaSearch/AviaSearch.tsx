import React, {useState} from 'react';
import style from './AviaSearch.module.css'
import {NavLink} from "react-router-dom";
import {UniversalInput} from "./UniversalInput/UniversalInput";
import {AVIA_INFO} from "../../Utils/const";

type PropsType = {
    ticketSearch: (departure: string, arrival: string, date: string, dateBack: string) => void
}

export const AviaSearch = (props: PropsType) => {

    const [departureCity, setDepartureCity] = useState('')
    const [arrivalCity, setArrivalCity] = useState('')
    const [dateThere, setDateThere] = useState('')
    const [dateBack, setDateBack] = useState('')

    const onclickHandler = () => props.ticketSearch(departureCity, arrivalCity, dateThere, dateBack)

    const disabled = (n1: string, n2: string, n3: string) => n1 === n2 || n1 === '' || n2 === '' || n3 === ''
    let disabledButton = disabled(departureCity,arrivalCity,dateThere)

    let className = style.custom_btn

    if (disabledButton) {
        className = className + ' ' + style.disabledBtn
    }

    return (
        <div className={style.container}>
            <div className={style.item_1}>
                <UniversalInput title={'Откуда'}
                           value={departureCity}
                           placeholder={'Город вылета'}
                           text={'text'}
                           callback={setDepartureCity} />
            </div>
            <div className={style.item_2}>
                <UniversalInput value={arrivalCity}
                           placeholder={'Город прилета'}
                           text={'text'}
                           title={'Куда'}
                           callback={setArrivalCity}/>
            </div>
            <div className={style.item_3}>
                <UniversalInput value={dateThere}
                           placeholder={''}
                           text={'date'}
                           title={'Туда'}
                           callback={setDateThere}/>
            </div>
            <div className={style.line}></div>
            <div className={style.item_4}>
                <UniversalInput value={dateBack}
                           placeholder={''}
                           text={'date'}
                           title={'Обратно'}
                           callback={setDateBack}/>
            </div>
            <div className={style.item_5}>
                <NavLink to={AVIA_INFO}>
                    <button disabled={disabledButton}
                            className={className}
                            onClick={onclickHandler}>
                        Найти билет
                    </button>
                </NavLink>
            </div>
        </div>
    );
};