import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const Register = () => {
  // 性别
  const options = ["男", "女", "TA"];
  const [value, setValue] = React.useState(options[2]); //如果没选就是 null
  const [inputValue, setInputValue] = React.useState("");
  //名字
  const [name, setName] = React.useState("");

  return (
    <div>
      {/* 名字 */}
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
        <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
        {/* <div>{`inputValue: '${inputValue}'`}</div> */}
        <br />
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
    </div>
  );
};

export default Register;
