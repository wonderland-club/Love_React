//应用于获取username的reducers
const UserName = (state = "未知用户", action) => {
    switch (action.type) {
        case "Get_UserName":
            return state;
        case "Set_UserName":
            return action.data;
        case "undefined":
            return "undefined_User"
        default:
            return state;
    }
}
export default UserName;