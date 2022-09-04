import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddWords from "../pages/AddWords";
import NotFound from "../pages/NotFound";
import Quiz from "../pages/Quiz";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-words" element={<AddWords />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
