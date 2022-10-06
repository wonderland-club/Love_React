import { Link } from "react-router-dom";
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
  return (
    <div>
      <h1>恋爱小记</h1>

      <nav>
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
        <Link to={AddCompanion_COMPONENT_ROUTE}>{AddCompanion_COMPONENT_NAME}</Link>
        <br />
        <Link to={Companion_COMPONENT_ROUTE}>{Companion_COMPONENT_NAME}</Link>
        <br />
      </nav>
      {children}
    </div>
  );
};

export default Layout;
