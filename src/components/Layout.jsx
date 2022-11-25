import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Login from "../pages/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut, SetUserName, GetUserName, undefined_User } from "../redux/action";

import {
  Login_COMPONENT_ROUTE,
  Register_COMPONENT_ROUTE,
  LoveNotes_COMPONENT_ROUTE,
  AddNote_COMPONENT_ROUTE,
  LoveCourse_COMPONENT_ROUTE,
  AddJourney_COMPONENT_ROUTE,
  AddCompanion_COMPONENT_ROUTE,
  Companion_COMPONENT_ROUTE,
} from "../route-constants";
import { margin } from "@mui/system";
const Layout = ({ children }) => {
  // 控制顶栏和底栏的显示
  const Checklogin = useSelector((state) => state.IdentityVerification);

  return (
    <div>
      {Checklogin ? <ResponsiveAppBar /> : null}
      {/* <button
        type="button"
        onClick={() => {
          if (Checklogin) {
            dispatch(logOut());
          } else {
            dispatch(logIn());
          }
        }}
      >
        {" "}
        点我登入
      </button> */}
      {/* 传入路由 */}
      {children}
    </div>
  );
};

// 导航栏
const ResponsiveAppBar = () => {
  const dispatch = useDispatch();

  const Navigate = useNavigate();
  const userName_1 = useSelector((state) => state.UserName);

  const pages = ["添加伴侣", "伴侣设置"];
  const settings = ["个人账户", "登出"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const fetchLogout = async () => {
    await fetch("api/logout", {
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
      .then((data) => {
        dispatch(undefined_User());
        Navigate(Login_COMPONENT_ROUTE);
        return console.log("data is：", data);
      })
      .catch((error) => {
        Navigate(LoveNotes_COMPONENT_ROUTE);
        console.log("登出失败", error);
      });
  };

  const handleCloseUserMenu = (setting) => {
    // console.log(settings[0]);
    setAnchorElUser(null);
    if (setting == settings[0]) {
      console.log(setting + "222");
    } else if (setting == settings[1]) {
      // 登出
      fetchLogout();
      console.log(setting + "lll");
    }
    // console.log(setting);
  };

  return (
    <Box>
      <div style={{ width: "100%", height: "56px" }} />
      <AppBar sx={{ position: "fixed", top: 0, left: 0, right: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <HomeWorkRoundedIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOVE YOU
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <HomeWorkRoundedIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOVE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ mr: 1 }}>{userName_1}</Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="打开设置">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="陈" src="/img/wonderland (3).jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => {
                  // console.log(setting);
                  return (
                    <MenuItem
                      key={setting}
                      onClick={() => handleCloseUserMenu(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        <BottomAppBar style={{}} />
      </AppBar>
    </Box>
  );
};
export default Layout;

// 底栏
const BottomAppBar = () => {
  const Navigate = useNavigate();
  const [value, setValue] = React.useState("LoveNotes");

  const h80 = {
    height: 70,
  };
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
      elevation={3}
    >
      <BottomNavigation
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        value={value}
        sx={h80}
      >
        <BottomNavigationAction
          label="小记"
          value="LoveNotes"
          icon={<ConnectWithoutContactIcon />}
          onClick={() => {
            Navigate(LoveNotes_COMPONENT_ROUTE);
          }}
          sx={h80}
        />
        <BottomNavigationAction
          label="恋爱"
          value="Companion"
          icon={<FavoriteIcon />}
          onClick={() => {
            Navigate(Companion_COMPONENT_ROUTE);
          }}
          sx={h80}
        />
        <BottomNavigationAction
          label="历程"
          value="LoveCourse"
          icon={<HistoryOutlinedIcon />}
          onClick={() => {
            Navigate(LoveCourse_COMPONENT_ROUTE);
          }}
          sx={h80}
        />
      </BottomNavigation>
    </Paper>
  );
};
