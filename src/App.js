import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as React from "react";
import Layout from "./components/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import LoveNotes from "./pages/Note/LoveNotes";
import AddNote from "./pages/Note/AddNote";
import LoveCourse from "./pages/Course/LoveCourse";
import AddJourney from "./pages/Course/AddJourney";
import AddCompanion from "./pages/Companion/AddCompanion";
import Companion from "./pages/Companion/Companion";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import Paper from "@mui/material/Paper";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import {
  Login_COMPONENT_ROUTE,
  Register_COMPONENT_ROUTE,
  LoveNotes_COMPONENT_ROUTE,
  AddNote_COMPONENT_ROUTE,
  LoveCourse_COMPONENT_ROUTE,
  AddJourney_COMPONENT_ROUTE,
  AddCompanion_COMPONENT_ROUTE,
  Companion_COMPONENT_ROUTE,
} from "./route-constants";

function App() {
  // console.log(props.history);
  return (
    <div>
      <Layout>
        <div style={{ width: "100%", height: "56px" }}></div>

        <Routes>
          <Route path={`${Login_COMPONENT_ROUTE}`} element={<Login />} />
          <Route path={`${Register_COMPONENT_ROUTE}`} element={<Register />} />
          <Route
            path={`${LoveNotes_COMPONENT_ROUTE}`}
            element={<LoveNotes />}
          />
          <Route path={`${AddNote_COMPONENT_ROUTE}`} element={<AddNote />} />
          <Route
            path={`${LoveCourse_COMPONENT_ROUTE}`}
            element={<LoveCourse />}
          />
          <Route
            path={`${AddJourney_COMPONENT_ROUTE}`}
            element={<AddJourney />}
          />
          <Route
            path={`${AddCompanion_COMPONENT_ROUTE}`}
            element={<AddCompanion />}
          />
          <Route
            path={`${Companion_COMPONENT_ROUTE}`}
            element={<Companion />}
          />
        </Routes>
      </Layout>
      <BottomAppBar style={{  }} />
      <div style={{ width: "100%", height: "70px" }}></div>
    </div>
  );
}

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
export default App;
