import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/home/Header";
import HomeFooter from "./components/home/HomeFooter";
import CompanyDashboard from "./pages/Company-dashboard";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import RegisterCompany from "./pages/Register-company";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
      </Routes>
      <HomeFooter />
    </>
  );
}

export default App;
