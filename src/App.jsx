import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Home";
import Services from "./Services";
import Contacts from "./Contacts";
import NotFound from "./NotFound";
import ServiceDetails from "./ServiceDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:service" element={<ServiceDetails />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
