import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddCompanion = () => {
  const [email, setEmail] = React.useState("");

  return (
    <div>
      <Box>
        {/* 邮箱 */}
        <TextField
          // id="outlined-name"
          label="输入伴侣邮箱 Email"
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
      </Box>
    </div>
  );
};

export default AddCompanion;
