import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Assessments from "../pages/Assessments/Assessments";
import SpecificAssessment from "../pages/Assessments/SpecificAssessment";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/evaluaciones" element={<Assessments />} />
      <Route path="/evaluaciones/:topic" element={<SpecificAssessment />} />
    </Routes>
  );
}

export default AppRoutes;
