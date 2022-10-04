import { Routes, Route, Outlet } from "react-router-dom";

import "./App.scss";
import AuthCtx from "./context/authContext";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Settings from "./pages/Settings/Settings";
import Header from "./components/Header";
import Iam from "./pages/Iam/Iam";
import Users from "./pages/Iam/Users/Users";

function App() {
  const [loading, creds] = useAuth();

  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <AuthCtx.Provider value={creds}>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/iam" element={<Iam />}>
              <Route index element={<p>This is where you manage users</p>} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </div>
      </AuthCtx.Provider>

      {/* The Toaster component displays messages on a popup  */}
      <div id="toaster-portal"></div>
    </>
  );
}

export default App;
