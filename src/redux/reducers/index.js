
import { combineReducers  } from "redux";//引入为Count组件服务的reducer
import IdentityVerification from "./identityVerification";
import UserName from "./UserName";
// const { composeWithDevTools } = require('redux-devtools-extension');
const allReducers = combineReducers({
    // 虚拟身份验证
    IdentityVerification: IdentityVerification,
    // 用于设置和获取userName
    UserName: UserName
});
export default (allReducers)
