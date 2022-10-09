import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
const Register = () => {
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
            value={ConfirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              // console.log(event.target.value);
            }}
          />
        </Box>
        <Box sx={{ "& > button": { m: 1 }, textAlign: "center", mt: 2 }}>
          <LoadingButton
            size="large"
            disabled={false}
            onClick={() => {
              setLoading(true);
            }}
            endIcon={<ContactEmergencyIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            color={"success"}
          >
            注册账号
          </LoadingButton>
        </Box>
      </Box>
    </div>
  );
};

export default Register;
