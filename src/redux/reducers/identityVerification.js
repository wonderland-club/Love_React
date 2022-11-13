
// 用于身份验证的 reducers
const IdentityVerification = (state = true, action) => {
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