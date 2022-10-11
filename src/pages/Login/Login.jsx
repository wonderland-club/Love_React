import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Register_COMPONENT_ROUTE } from "../../route-constants";
const Login = () => {
  // 邮箱
  const [email, setEmail] = React.useState("");
  // passWorld
  const [ps, setPS] = React.useState("");
  // 提交 加载
  const [loading, setLoading] = React.useState(false);
  //   路由跳转
  const Navigate = useNavigate();

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
            id="outlined-name"
            label="邮箱 Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              // console.log(event.target.value);
            }}
            onBlur={()=>{
              alert(email);
            }}
          />
          <TextField
            id="outlined-name"
            label="输入密码"
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
              onClick={() => {
                setLoading(true);
              }}
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
