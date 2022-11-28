import {combineReducers, createStore} from "redux";
import {aviaReducers} from "./Reducers/avia-reducers";


export const rootReducer = combineReducers({
    avia: aviaReducers
})


export type AppRootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer)