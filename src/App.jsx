import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Form from "./components/Form";
import Home from "./components/Home";
import CarDetail from "./components/CarDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/class-components" element={<Form />} />
        <Route path="/team" element={<h1>Team</h1>} />
        <Route path="/cars" element={<h1>Cars</h1>} />
        <Route path="/cars/:carId" element={<CarDetail />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
