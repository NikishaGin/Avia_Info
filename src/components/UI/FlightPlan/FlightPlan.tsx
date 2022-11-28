import React from 'react';
import style from './FlightPlan.module.css'

export const FlightPlan = () => {
    return (
        <div>
            <div className={style.flight}>
                <div style={{right: 0}} className={style.frame}>
                    <div className={style.title}>
                        Rov
                    </div>
                    <div className={style.ellipse}></div>
                </div>
                <div style={{left: 0}} className={style.frame}>
                    <div className={style.title}>
                        Sov
                    </div>
                    <div className={style.ellipse}></div>
                </div>
                <div className={style.line}></div>
                <div className={style.text}>
                    в пути 1 час 55 минут
                </div>
            </div>
        </div>
    );
};

