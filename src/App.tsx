import Home from "./pages/Home";
import Resources from "./pages/Resources";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
};

export default App;
