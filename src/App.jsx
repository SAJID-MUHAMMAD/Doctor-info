import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import Specialist from "./pages/Specialist";
import SpecialistSearch from "./pages/SpecialistSearch";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Specialist" element={<Specialist />} />
        <Route path="/SpecialistSearch" element={<SpecialistSearch />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
