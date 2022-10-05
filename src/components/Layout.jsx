import { Link } from "react-router-dom";
import {
  FIFTH_COMPONENT_NAME,
  FIFTH_COMPONENT_ROUTE,
  FOURTH_COMPONENT_NAME,
  FOURTH_COMPONENT_ROUTE,
  ROOT_COMPONENT_NAME,
  ROOT_COMPONENT_ROUTE,
  SECOND_COMPONENT_NAME,
  SECOND_COMPONENT_ROUTE,
  THIRD_COMPONENT_NAME,
  THIRD_COMPONENT_ROUTE,
} from "../route-constants";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Layout</h1>

      <nav>
        <Link to={`${ROOT_COMPONENT_ROUTE}`}>{`${ROOT_COMPONENT_NAME}`}</Link>
        <br />
        <Link to={`${SECOND_COMPONENT_ROUTE}`}>{`${SECOND_COMPONENT_NAME}`}</Link>
        <br />
        <Link to={`${THIRD_COMPONENT_ROUTE}`}>{`${THIRD_COMPONENT_NAME}`}</Link>
        <br />
        <Link to={`${FOURTH_COMPONENT_ROUTE}`}>{`${FOURTH_COMPONENT_NAME}`}</Link>
        <br />
        <Link to={`${FIFTH_COMPONENT_ROUTE}`}>{`${FIFTH_COMPONENT_NAME}`}</Link>
        <br />
      </nav>

      {children}
    </div>
  );
};

export default Layout;
