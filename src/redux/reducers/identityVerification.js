
// 用于身份验证的 reducers
const initState = false;
const IdentityVerification = (state = initState, action) => {
    console.log("state:" + initState);
    switch (action.type) {
        case "LOG_IN":
            return true;
        case "LOG_OUT":
            return false;
        default:
            return state;
    }
};
export default IdentityVerification;