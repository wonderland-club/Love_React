export const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export const GetUserName = () => {
  return {
    type: "Get_UserName",
  }
}
export const SetUserName = (DATA) => {
  return {
    type: "Set_UserName",
    data: DATA
  }
}
export const undefined_User = () => {
  return {
    type: "undefined"
  }
}

