//应用于获取username的reducers
const UserName = (state = "未登入+1", action) => {
    switch (action.type) {
        case "Get_UserName":
            return state;
        case "Set_UserName":
            return action.data;
        default:
            return state;
    }
}
export default UserName;