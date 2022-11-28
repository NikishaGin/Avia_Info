import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AviaInfoThere} from "./components/AviaInfoThere/AviaInfoThere";
import {AviaSearch} from "./components/AviaSearch/AviaSearch";
import {useDispatch, useSelector} from "react-redux";
import {changeDepartureCityAC,} from "./Store/Reducers/avia-reducers";
import {AppRootState} from "./Store/store";
import {AviaThereAndBackInfo} from "./components/AviaThereAndBackInfo/AviaThereAndBackInfo";
import {TypeState} from "./types/type";
import {AVIA, AVIA_INFO} from "./Utils/const";

function App() {

    const state = useSelector<AppRootState, TypeState []>(state => state.avia)

    const dispatch = useDispatch()

    const ticketSearch = (departure: string , arrival: string, date: string, dateBack: string) => {
        dispatch(changeDepartureCityAC(departure, arrival, date, dateBack))
    }

    return (
        <Routes>
            <Route path={AVIA} element={<AviaSearch ticketSearch={ticketSearch}/>}/>

            <Route path={AVIA_INFO} element={state.map(state => {
                return state.dateBack ? <AviaThereAndBackInfo departureCity={state.departureCity}
                                                              dateThere={state.dateThere}
                                                              arrivalCity={state.arrivalCity}
                                                              dateBack={state.dateBack}
                                                    />
                                      : <AviaInfoThere departureCity={state.departureCity}
                                                       dateThere={state.dateThere}
                                                       arrivalCity={state.arrivalCity}
                                                    />
            })}/>
        </Routes>
    );
}


export default App;
