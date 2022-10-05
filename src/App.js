import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import RootComponent from './pages/RootComponent/RootComponent';
import SecondComponent from './pages/SecondComponent/SecondComponent';
import ThirdComponent from "./pages/ThirdComponent/ThirdComponent";
import FourthComponent from "./pages/FourthComponent/FourthComponent";
import FifthComponent from "./pages/FifthComponent/FifthComponent";
import { 
  ROOT_COMPONENT_ROUTE, 
  SECOND_COMPONENT_ROUTE, 
  THIRD_COMPONENT_ROUTE, 
  FOURTH_COMPONENT_ROUTE, 
  FIFTH_COMPONENT_ROUTE 
} from './route-constants';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path={`${ROOT_COMPONENT_ROUTE}`} element={<RootComponent />} />
        <Route path={`${SECOND_COMPONENT_ROUTE}`} element={<SecondComponent />} />
        <Route path={`${THIRD_COMPONENT_ROUTE}`} element={<ThirdComponent />} />
        <Route path={`${FOURTH_COMPONENT_ROUTE}`} element={<FourthComponent />} />
        <Route path={`${FIFTH_COMPONENT_ROUTE}`} element={<FifthComponent />} />
      </Routes>
    </Layout>
  );
}

export default App;
