import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import CardMedia from "@mui/material/CardMedia";

export default function AddNote() {
  const [title, setTitle] = React.useState("Love");
  const [content, setContent] = React.useState("Love");

  return (
    <>
      <Cover />
      <Box component="form" noValidate autoComplete="off">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            <TextField
              autoFocus={true}
              color="warning"
              fullWidth={true}
              sx={{ maxWidth: "800px" }}
              margin="normal"
              id="standard-multiline-flexible"
              label="今日美好标题"
              multiline
              maxRows={4}
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                console.log(event.target.value);
              }}
              size="small"
              variant="outlined"
            />
            <TextField
              color="warning"
              size="medium"
              margin="normal"
              fullWidth={true}
              sx={{ maxWidth: "800px" }}
              id="standard-multiline-static"
              label="今日浪漫小记"
              multiline
              rows={4}
              defaultValue="今日浪漫小记"
              onChange={(event) => {
                setContent(event.target.value);
                console.log(event.target.value);
              }}
              variant="outlined"
            />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <LoadingButtonsTransition />
          </Box>
        </Box>
      </Box>
    </>
  );
}

// 提交刚刚的小记
function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <Box>
      <Box sx={{ "& > button": { m: 1 } }}>
        <LoadingButton
          size="small"
          onClick={handleClick}
          loading={loading}
          loadingIndicator="Loading…"
          variant="outlined"
        >
          Fetch data
        </LoadingButton>
      </Box>
    </Box>
  );
}

// 封面
function Cover() {
  return (
    <div>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="img/wonderland (4).png"
      />
    </div>
  );
}
