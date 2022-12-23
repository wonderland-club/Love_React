import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OverallCentered from "../../components/Typesetting_components/Overall_centered";
import { useSelector, useDispatch } from "react-redux";
import { GetUserName } from "../../redux/action";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function AddCompanion() {
  const [email, setEmail] = React.useState("");
  const [SearchButtonDisabled, setSearchButtonDisabled] = React.useState(false);
  //查找的用户情况
  const [RelationshipStatus, setRelationshipStatus] = React.useState("null");
  //检查用户有无点击search按钮
  const [IsOnClick, SetIsOnClick] = React.useState(false);
  async function search() {
    await fetch("api/check_if_there_is_a_binding?email=" + email, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          return Promise.reject("me_something went wrong!");
        }
      })
      .then((data) => {
        if (data === "true") {
          setRelationshipStatus("true");
        } else if (data === "false") {
          setRelationshipStatus("false");
        } else {
          setRelationshipStatus("null");
        }
        SetIsOnClick(true);
        // console.log("IsOnClick :" + IsOnClick);
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

  //检测输入框
  useEffect(() => {
    SetIsOnClick(false);
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

  const EmailUserState = ({ name, Contents }) => {
    return (
      <Card sx={{ width: "100%", mt: 3, mb: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="http://localhost:3000/img/wonderland%20(2).png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Contents}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <ApplicationBindingButton />
          {/* <Button
            disabled={RelationshipStatus === "false" ? false : true}
            size="small"
            color="primary"
            onClick={() => {
              Application_binding();
            }}
          >
            向 TA 申请为我的伴侣
          </Button> */}
        </CardActions>
      </Card>
    );
  };

  // 申请为伴侣
  const Application_binding = async () => {
    await fetch(
      "api/application_binding?user_email=" +
        StateEmail +
        "&love_email=" +
        email,
      {
        method: "GET",
        headers: { "Content-Type": "application/Text" },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          return Promise.reject("me_something went wrong!");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  // 申请为伴侣按钮
  const ApplicationBindingButton = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button
          disabled={RelationshipStatus === "true" ? true : false}
          variant="outlined"
          onClick={handleClickOpen}
        >
          Open dialog
        </Button>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            签署协议：一生伴侣绑定
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              钻石是在地球深部高压条件下形成的一种由碳元素组成的单质晶体。
            </Typography>
            <Typography gutterBottom>
              因此，钻石是世界上最坚硬的、成分最简单的宝石。 物以稀为贵，钻石本身储量就少，价格自然不低。
            </Typography>
            <Typography gutterBottom>
              而随着人们需要深入地下开采钻石，这也意味着钻石开采难度增大，人们需要投入的人力、物力、财力也要随之增加，钻石原料成本就上升了。
            </Typography>
            <Typography gutterBottom>
              我们受到DR钻戒启发，我们仅给予每一个人同等的机会，每个人一生只能绑定一位伴侣，你们的爱情就像一生只能购买一次DR钻石一样。
            </Typography>
            <Typography gutterBottom>
              一颗好的DR钻石需要需要投入非常多的人力物力财力，爱情也应如此，投入非常多的时间和精力。
            </Typography>
            <Typography gutterBottom>
              请您谨慎签署，一旦签署，如对方同意绑定之后，便无法解除。
            </Typography>
            <Typography gutterBottom>签署人账号：{StateEmail}</Typography>
            <Typography gutterBottom>
              也会向TA 的账号发送该协议
              {email}
            </Typography>
          </DialogContent>
          <hr />
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              拒绝签署
            </Button>
            <Button
              sx={{ color: "red" }}
              autoFocus
              onClick={() => {
                Application_binding();
                handleClose();
              }}
            >
              签署协议
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
  };

  //未找到联系人
  const NotFound = () => <>未找到email为:{email}的用户</>;
  //该联系人没有默认是单身
  const UserSingle = () => (
    <>
      <EmailUserState name={email} Contents={"状态：单身"} />
    </>
  );

  //该用户已有伴侣
  const AlreadyHaveAPartner = () => <> email为:{email} 的用户已有伴侣</>;

  //展示用户关系状态
  const UserRelationshipsState = () => {
    if (RelationshipStatus === "true") {
      return <AlreadyHaveAPartner />;
    } else if (RelationshipStatus === "false") {
      return <UserSingle />;
    }
    return <NotFound />;
  };

  return (
    <>
      <OverallCentered>
        <>
          <Box sx={{ textAlign: "center", mb: 3 }}>查找伴侣</Box>
          <Emailinput></Emailinput>
          {IsOnClick ? <UserRelationshipsState /> : null}
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
