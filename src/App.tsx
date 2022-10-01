import { Routes, Route } from "react-router-dom";

import "./App.scss";
import AuthCtx from "./context/authContext";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header";
import ToastCtx, { IToastCtx } from "./context/toastContext";
import Toaster from "./components/Toaster";
import useToaster from "./hooks/useToaster";

function App() {
  const auth = useAuth();
  const [toastContent, toastContext] = useToaster();

  if (auth.loading) {
    return <div className="loading"></div>;
  }

  return (
    <ToastCtx.Provider value={toastContext as IToastCtx}>
      <AuthCtx.Provider value={auth.value}>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </AuthCtx.Provider>

      {/* The Toaster component displays messages on a popup  */}
      <Toaster content={toastContent} />
    </ToastCtx.Provider>
  );
}

export default App;
