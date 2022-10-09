import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
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
import AdbIcon from "@mui/icons-material/Adb";
import HomeWorkRoundedIcon from "@mui/icons-material/HomeWorkRounded";

import {
  Login_COMPONENT_ROUTE,
  Login_COMPONENT_NAME,
  Register_COMPONENT_ROUTE,
  Register_COMPONENT_NAME,
  LoveNotes_COMPONENT_ROUTE,
  LoveNotes_COMPONENT_NAME,
  AddNote_COMPONENT_ROUTE,
  AddNote_COMPONENT_NAME,
  LoveCourse_COMPONENT_ROUTE,
  LoveCourse_COMPONENT_NAME,
  AddJourney_COMPONENT_ROUTE,
  AddJourney_COMPONENT_NAME,
  AddCompanion_COMPONENT_ROUTE,
  AddCompanion_COMPONENT_NAME,
  Companion_COMPONENT_ROUTE,
  Companion_COMPONENT_NAME,
} from "../route-constants";

const Layout = ({ children }) => {
  const Navigate = useNavigate();
  const [value, setValue] = React.useState("LoveNotes");

  const h80 = {
    height: 70,
  };
  return (
    <div>
      <ResponsiveAppBar sx={{ position: "fixed", top: 0, left: 0, right: 0 }} />
      {/* <nav>
        <Link to={Login_COMPONENT_ROUTE}>{Login_COMPONENT_NAME}</Link>
        <br />
        <Link to={Register_COMPONENT_ROUTE}>{Register_COMPONENT_NAME}</Link>
        <br />
        <Link to={LoveNotes_COMPONENT_ROUTE}>{LoveNotes_COMPONENT_NAME}</Link>
        <br />
        <Link to={AddNote_COMPONENT_ROUTE}>{AddNote_COMPONENT_NAME}</Link>
        <br />
        <Link to={LoveCourse_COMPONENT_ROUTE}>{LoveCourse_COMPONENT_NAME}</Link>
        <br />
        <Link to={AddJourney_COMPONENT_ROUTE}>{AddJourney_COMPONENT_NAME}</Link>
        <br />
        <Link to={AddCompanion_COMPONENT_ROUTE}>
          {AddCompanion_COMPONENT_NAME}
        </Link>
        <br />
        <Link to={Companion_COMPONENT_ROUTE}>{Companion_COMPONENT_NAME}</Link>
        <br />
      </nav> */}

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
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
      {children}
    </div>
  );
};

const pages = ["添加伴侣", "伴侣设置"];
const settings = ["个人账户", "登出"];
// 导航栏
const ResponsiveAppBar = () => {
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="打开设置">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="陈" src="/img/me.png" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Layout;
