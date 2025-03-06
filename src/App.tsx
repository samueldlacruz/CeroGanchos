import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
