import { combineReducers } from "redux";
import {form} from './form';
import { users } from "./user";
import { filterPage } from "./filter";

const reducer=combineReducers({
    form,
    users,
    filterPage,
})

export default reducer;