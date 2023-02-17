import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import creamReducer from "./icecream/creamReducer";
import { userReducer } from "./user/userReducer";
const rootReducer=combineReducers({
    iceCream:creamReducer,
    cake:cakeReducer,
    users:userReducer
})
export default rootReducer;