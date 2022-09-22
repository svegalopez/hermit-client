import "./App.scss";
import AuthCtx from "./context/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header";

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <div className="loading"></div>;
  }

  return (
    <BrowserRouter basename="/hermit-client">
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
    </BrowserRouter>
  );
}

export default App;
