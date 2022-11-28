import React from 'react';
import style from './TimeButton.module.css'
import {TimeRange} from "../../../types/type";


export type TimeButtonProps = {
    timeRange: TimeRange
    onClick: (timeRange: TimeRange) => void
    isActive: boolean
}

export const TimeButton = (props: TimeButtonProps) => {

    let className = style.btn

    if (props.isActive) {
        className = className + ' ' + style.activeBtn
    }

    const onClickHandler = () => {
        props.onClick(props.timeRange)
    }

    return (
        <button className={className} onClick={onClickHandler}>{props.timeRange.startTime}-{props.timeRange.endTime}</button>
    );
};

