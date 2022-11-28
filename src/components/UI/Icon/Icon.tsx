import React from 'react';
import style from './Icon.module.css'
import LuggageIcon from "@mui/icons-material/Luggage";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export const Icon = () => {
    return (
        <div className={style.grid_icon}>
            <div className={style.icon}>
                <LuggageIcon/>
                <BusinessCenterIcon/>
            </div>
        </div>
    );
};
