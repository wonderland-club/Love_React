
import { combineReducers } from "redux";//引入为Count组件服务的reducer
import IdentityVerification from "./identityVerification"

const allReducers = combineReducers({
    IdentityVerification: IdentityVerification
});
export default (allReducers)
