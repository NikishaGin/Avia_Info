import React from 'react';
import style from './LogoAndTitle.module.css'

export const LogoAndTitle = () => {
    return (
        <>
            <div className={style.sticker}>
                <div className={style.sticker_title}>
                    Невозвратный
                </div>
            </div>
            <div className={style.item_logo}>
                <img className={style.logo} src={'https://mpics.avs.io/al_square/64/64/S7.png'}/>
                <div className={style.logo_title}>
                    S7 Airlines
                </div>
            </div>
        </>
    );
};
