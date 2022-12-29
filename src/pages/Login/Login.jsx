import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
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
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { logIn, logOut } from "../redux/action";
import { logIn, logOut, SetUserName } from "../../redux/action";
const Login = (props) => {
  const dispatch = useDispatch();

  // 邮箱
  const [email, setEmail] = React.useState("");

  // passWorld
  const [ps, setPS] = React.useState("");
  // 提交 加载
  const [loading, setLoading] = React.useState(false);
  //   路由跳转
  const Navigate = useNavigate();
  const location = useLocation(); //查看当前的location

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

        // console.log(userName_1);
        // console.log(userName);
        // dispatch(logIn());
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
  // 控制顶栏和底栏的显示

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   // console.log(location);
  //   if (location.pathname == "/login") {
  //     console.log("调用初始化函数");
  //     dispatch(logOut());
  //   }
  // }, []);

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
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
            },
            // width: "25ch",
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
          noValidate
          autoComplete="off"
        >
          {/* 邮箱 */}
          <TextField
            // id="outlined-name"
            label="邮箱 Email"
            autoFocus={true}
            error={false} //输入错误
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              // console.log(event.target.value);
            }}
            onBlur={() => {
              // alert("email");
            }}
          />
          <TextField
            // id="outlined-name"
            label="输入密码"
            type={"password"}
            value={ps}
            onChange={(event) => {
              setPS(event.target.value);
              // console.log(event.target.value);
            }}
          />
          <Box
            sx={{
              "& > button": { m: 1 },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <LoadingButton
              sx={{ width: "150px" }}
              size="large"
              disabled={false}
              onClick={() => loginData()}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              登入 LOVE
            </LoadingButton>

            <Button
              variant="outlined"
              size="large"
              sx={{ width: "110px", mb: 10 }}
              onClick={() => {
                Navigate(Register_COMPONENT_ROUTE);
              }}
            >
              注册账号
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
