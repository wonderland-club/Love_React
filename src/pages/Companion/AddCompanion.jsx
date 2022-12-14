import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OverallCentered from "../../components/Typesetting_components/Overall_centered";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { GetUserName } from "../../redux/action";
export default function AddCompanion() {
  const [email, setEmail] = React.useState("");
  const [SearchButtonDisabled, setSearchButtonDisabled] = React.useState(false);
  async function search() {
    await fetch("api/check_if_there_is_a_binding?email=" + email, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("me_something went wrong!");
        }
      })
      .then((data) => {
        if (data === null) {
          console.log("没有用户为：" + email);
        } else if (data) {
          console.log("该用户有伴侣" + email);
        } else {
          console.log("该用户没有伴侣" + email);
        }
        return console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const Emailinput = () => {
    return (
      <>
        {/* 邮箱 */}
        <TextField
          // id="outlined-name"
          label="输入伴侣邮箱 Email"
          autoFocus={true}
          error={false} //输入错误
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          fullWidth={true}
          onBlur={() => {
            // alert(email);
          }}
        />
      </>
    );
  };
  const SearchButton = () => {
    return (
      <>
        <Button
          variant="outlined"
          disabled={SearchButtonDisabled}
          onClick={() => {
            search();
          }}
        >
          Search 伴侣
        </Button>
      </>
    );
  };
  const StateEmail = useSelector((state) => state.UserName);

  useEffect(() => {
    if (email.length === 0) {
      setSearchButtonDisabled(true);
    } else {
      if (email === StateEmail) {
        setSearchButtonDisabled(true);
      } else {
        setSearchButtonDisabled(false);
      }
    }
  }, [email]);
  return (
    <>
      <OverallCentered>
        <>
          <Box sx={{ textAlign: "center", mb: 3 }}>查找伴侣</Box>
          <Emailinput></Emailinput>
        </>
      </OverallCentered>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          position: "fixed",
          bottom: 100,
        }}
      >
        <SearchButton sx={{ width: "100px" }}></SearchButton>
      </Box>
    </>
  );
}
