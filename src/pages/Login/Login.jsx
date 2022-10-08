import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Login = () => {
  const options = ["男", "女", "TA"];
  const [value, setValue] = React.useState(options[2]);
  const [inputValue, setInputValue] = React.useState("");
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
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
      {/* 性别 */}
      <div>
        <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
        {/* <div>{`inputValue: '${inputValue}'`}</div> */}
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue} 
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="性别" />}
        />
      </div>
    </div>
  );
};

export default Login;
