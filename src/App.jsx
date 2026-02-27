import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/home/Header";
import HomeFooter from "./components/home/HomeFooter";
import CompanyDashboard from "./pages/Company-dashboard";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import RegisterCompany from "./pages/Register-company";
import PrivateRoutes from "./routes/PrivateRoutes";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <HomeFooter />
    </>
  );
}

export default App;
