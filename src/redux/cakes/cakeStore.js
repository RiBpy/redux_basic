import { legacy_createStore as createStore } from "redux"
import cakeReducer from "./cakeReducer"
console.log(cakeReducer);
const store =createStore(cakeReducer)
export default store