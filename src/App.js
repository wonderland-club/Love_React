import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import RootComponent from "./pages/RootComponent/RootComponent";
import SecondComponent from "./pages/SecondComponent/SecondComponent";
import ThirdComponent from "./pages/ThirdComponent/ThirdComponent";
import FourthComponent from "./pages/FourthComponent/FourthComponent";
import FifthComponent from "./pages/FifthComponent/FifthComponent";
import {
  Login_COMPONENT_ROUTE,
  Register_COMPONENT_ROUTE,
  AddNote_COMPONENT_ROUTE,
  LoveCourse_COMPONENT_ROUTE,
  AddJourney_COMPONENT_ROUTE,
  AddCompanion_COMPONENT_ROUTE,
  Companion_COMPONENT_ROUTE,
} from "./route-constants";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          index
          path={`${ROOT_COMPONENT_ROUTE}`}
          element={<RootComponent />}
        />
        <Route
          path={`${SECOND_COMPONENT_ROUTE}`}
          element={<SecondComponent />}
        />
        <Route path={`${THIRD_COMPONENT_ROUTE}`} element={<ThirdComponent />} />
        <Route
          path={`${FOURTH_COMPONENT_ROUTE}`}
          element={<FourthComponent />}
        />
        <Route path={`${FIFTH_COMPONENT_ROUTE}`} element={<FifthComponent />} />
      </Routes>
    </Layout>
  );
}

export default App;
