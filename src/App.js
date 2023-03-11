import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Letras from "./pages/Letras/Letras";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import Dashboard from "./pages/dashboard/Dashboard";
import Pag from "./pages/Pag/Pag";
import Sobrenos from "./pages/Sobrenos/Sobrenos";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Player from "./pages/Player/App";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./components/layout/Layout";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import AddCasal from "./pages/addCasal/AddCasal";
import CasalDetail from "./components/casal/casalDetail/CasalDetail";
import EditCasal from "./pages/editCasal/EditCasal";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Contact from "./pages/contact/Contact";
import Frase from "./pages/Frases/Frase";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
     <Navbar/>
      <ToastContainer />
      <Routes>
      <Route path="/" element={<Pag/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} />
        <Route path="/sobrenos" element={<Sobrenos />} />
        <Route path="/app" element={<Player />} />
        <Route path="/frase" element={<Frase />} />
        <Route path="/letras" element={<Letras />} />
        
        <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/add-casal"
          element={
            <Sidebar>
              <Layout>
                <AddCasal />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/casal-detail/:id"
          element={
            <Sidebar>
              <Layout>
                <CasalDetail />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-casal/:id"
          element={
            <Sidebar>
              <Layout>
                <EditCasal />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/profile"
          element={
            <Sidebar>
              <Layout>
                <Profile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <Sidebar>
              <Layout>
                <EditProfile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Sidebar>
              <Layout>
                <Contact />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
