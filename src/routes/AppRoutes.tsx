import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Assessments from "../pages/Assessments/Assessments";
import SpecificAssessment from "../pages/Assessments/SpecificAssessment";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/evaluaciones" element={<Assessments />} />
      <Route path="/evaluaciones/:topic" element={<SpecificAssessment />} />
      <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
      <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default AppRoutes;
