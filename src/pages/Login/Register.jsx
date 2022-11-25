import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

// import { logIn, logOut } from "../redux/action";
import { logIn, logOut, SetUserName } from "../../redux/action";
import {
  Login_COMPONENT_ROUTE,
  Register_COMPONENT_ROUTE,
  LoveNotes_COMPONENT_ROUTE,
  AddNote_COMPONENT_ROUTE,
  LoveCourse_COMPONENT_ROUTE,
  AddJourney_COMPONENT_ROUTE,
  AddCompanion_COMPONENT_ROUTE,
  Companion_COMPONENT_ROUTE,
} from "../../route-constants";


const Register = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const location = useLocation(); //查看当前的location


  // 性别
  const options = ["男", "女", "TA"];
  const [value, setValue] = React.useState(options[2]); //如果没选就是 null
  const [inputValue, setInputValue] = React.useState("");
  //名字
  const [name, setName] = React.useState("");
  // 邮箱
  const [email, setEmail] = React.useState("");
  // passWorld
  const [ps, setPS] = React.useState("");
  const [ConfirmPassword, setConfirmPassword] = React.useState("");
  // 提交 加载
  const [loading, setLoading] = React.useState(false);

  // headers: {
  //   "Content-Type": "application/json",
  // },

  const loginData = async () => {
    // setLoading(true);

    const DATA = { email: email, password: ps };

    await fetch("api/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DATA),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("something went wrong!");
        }
      })
      .then((data) => {
        dispatch(logIn());
        Navigate(LoveNotes_COMPONENT_ROUTE);
        fetchMe();
        return console.log("data is", data);
      })
      .catch((error) => {
        console.log("error is", error);
      });
  };

  // me
  const fetchMe = async () => {
    await fetch("api/me", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(DATA),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("something went wrong!");
        }
      })
      .then(async (data) => {
        // 登入成功
        // console.log(data["username"]);
        dispatch(SetUserName(await data["username"]))
        Navigate(LoveNotes_COMPONENT_ROUTE);
        return console.log("登入成功");
      })
      .catch((error) => {
        if (location.pathname == "/Login") {
          console.log("调用初始化函数");
          dispatch(logOut());
        }
        Navigate(Login_COMPONENT_ROUTE);
        console.log("未登入", error);
      });
  }

  // 注册账号
  const RegisterData = async () => {
    const DATA = {
      user_name: name,
      gender: value,
      email: email,
      password: ps,
    };
    // console.log(DATA);
    await fetch("api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DATA),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("注册失败");
        }
      })
      .then(async (data) => {
        await loginData();
        return console.log(data);
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ width: "180px" }} src="img/qingLv.svg" alt="" />
      </div>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          mt: 3,
        }}
      >
        {/* 名字 */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: "50px", m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-name"
            label="姓名"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              // console.log(event.target.value);
            }}
          />
        </Box>
        {/* 性别 */}
        <div>
          {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div> */}
          {/* <div>{`inputValue: '${inputValue}'`}</div> */}
          <Autocomplete
            size={"medium"}
            value={value}
            onChange={(event, newValue, oldValue) => {
              console.log(oldValue);
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: "215px", m: 1 }}
            renderInput={(params) => <TextField {...params} label="性别" />}
          />
        </div>
        {/* 邮箱 */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-name"
            label="邮箱 Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              // console.log(event.target.value);
            }}
          />
        </Box>

        {/* 密码 */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-name"
            label="设置密码"
            value={ps}
            type={"password"}
            onChange={(event) => {
              setPS(event.target.value);
              // console.log(event.target.value);
            }}
          />
        </Box>
        {/* 确认密码 */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-name"
            label="确认密码"
            type={"password"}
            value={ConfirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </Box>
        <Box sx={{ "& > button": { m: 1 }, textAlign: "center", mt: 2 }}>
          <LoadingButton
            size="large"
            disabled={false}
            onClick={() => {
              // setLoading(true);
              RegisterData();

            }}
            endIcon={<ContactEmergencyIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            color={"success"}

          >
            注册账号并登入
          </LoadingButton>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
