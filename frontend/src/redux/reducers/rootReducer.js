import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer"
import itinerariesReducer from "./itinerariesReducer";

const rootReducer = combineReducers({
    city: citiesReducer,
    itinerary: itinerariesReducer


   
})

export default rootReducer