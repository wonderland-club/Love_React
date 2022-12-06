import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import AddCardIcon from "@mui/icons-material/AddCard";
import { useNavigate, useLocation } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

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
const LoveNotes = () => {
  //   路由跳转
  const Navigate = useNavigate();

  const centerGrid = {
    display: "flex",
    justifyContent: "center",
    padding: "5px",
  };
  return (
    <div>
      <Box>
        <Cover />
      </Box>
      {/* 按钮 */}
      <Box>
        <AddButton />
      </Box>
      <Box sx={{ flexGrow: 1, mt: 9 }}>
        <Grid
          container
          // spacing={{ xs: 2, md: 2 }}

          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={6} sm={4} md={3} item style={{ ...centerGrid }}>
            <LoveCard
              imageSrc={"img/wonderland (1).png"}
              title={"Enndme"}
              Content={"卢卡斯加大素和杜萨核对"}
              data={"2022-11-28"}
            />
          </Grid>
          <Grid xs={6} sm={4} md={3} item style={{ ...centerGrid }}>
            <LoveCard
              imageSrc={"img/wonderland (2).png"}
              title={"Enndme"}
              Content={"卢卡斯加大素和杜萨核对"}
              data={"2022-01-05"}
            />
          </Grid>
          <Grid xs={6} sm={4} md={3} item style={{ ...centerGrid }}>
            <LoveCard
              imageSrc={"img/wonderland (3).png"}
              title={"鞠婧祎"}
              Content={"卢卡斯加大素和杜萨核对"}
              data={"2022-01-20"}
            />
          </Grid>
          <Grid xs={6} sm={4} md={3} item style={{ ...centerGrid }}>
            <LoveCard
              imageSrc={"img/wonderland (4).png"}
              title={"Enndme"}
              Content={
                "卢卡斯加大素和杜萨核对dfgdfg 打发手动阀打发十分士大夫士大夫深度复第三方首付大概豆腐干风格地方地方跟岁的法国递归 递归发"
              }
              data={"2022-10-08"}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

// 卡片
const LoveCard = (props) => {
  const style = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Card sx={{ width: 345, minWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imageSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography component={"span"} variant="body2" color="text.secondary">
            <Box sx={style}>{props.Content}</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          {props.data}
        </Button>
      </CardActions>
    </Card>
  );
};

// 添加按钮
function AddButton() {
  const Navigate = useNavigate();

  const actions = [
    { icon: <AddCircleOutlineIcon />, name: "Add" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (actionName) => {
    setOpen(false);
    if (actionName === "Add") {
      fetch("api/k")
        .then((response) => response.json())
        .then((data) => console.log(data));
      Navigate(AddNote_COMPONENT_ROUTE);
    }
  };
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: "fixed", bottom: 100, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        ß
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClose(action.name)}
          />
        ))}
      </SpeedDial>
    </>
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
        image="img/wonderland (2).png"
      />
    </div>
  );
}

export default LoveNotes;
