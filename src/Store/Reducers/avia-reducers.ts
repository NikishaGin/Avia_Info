import {TypeState} from "../../types/type";

type ActionType = typeChangeDepartureCity

const initialState: TypeState [] = [{departureCity: '', arrivalCity: '',dateThere: '',dateBack: ''},]


export const aviaReducers = (state = initialState, action: ActionType): TypeState [] => {
    switch (action.type) {
        case "CHANGE-DEPARTURE-CITY": {
            return state.map(el => {
                return {
                    ...el,
                    departureCity: action.departure,
                    arrivalCity: action.arrival,
                    dateThere: action.date,
                    dateBack: action.dateBack,
                }
            })
        }
        default:
            return state
    }
}


type typeChangeDepartureCity = ReturnType<typeof changeDepartureCityAC>
export const changeDepartureCityAC = (departure: string , arrival: string, date: string, dateBack: string) => {
    return {
        type: 'CHANGE-DEPARTURE-CITY', departure, arrival, date, dateBack
    } as const
}
