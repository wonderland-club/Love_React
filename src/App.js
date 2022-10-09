import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import LoveNotes from "./pages/Note/LoveNotes";
import AddNote from "./pages/Note/AddNote";
import LoveCourse from "./pages/Course/LoveCourse";
import AddJourney from "./pages/Course/AddJourney";
import AddCompanion from "./pages/Companion/AddCompanion";
import Companion from "./pages/Companion/Companion";
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
        <div style={{ width: "100%", height: "70px" }}></div>
      </Layout>
    </div>
  );
}

export default App;
