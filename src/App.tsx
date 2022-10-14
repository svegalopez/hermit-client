import { Routes, Route, Navigate } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import "./App.scss";
import client from "./apollo-client";
import AuthCtx from "./context/authContext";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Settings from "./pages/Settings/Settings";
import Header from "./components/Header/Header";
import Iam from "./pages/Iam/Iam";
import Users from "./pages/Iam/Users/Users";

function App() {
  const [loading, creds] = useAuth();

  if (loading) {
    return <div className="hc-loader">Loading...</div>;
  }

  return (
    <>
      <AuthCtx.Provider value={creds}>
        <ApolloProvider client={client}>
          <div className="hc-app">
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/iam" element={<Iam />}>
                <Route index element={<Navigate to="users" />} />
                <Route path="users" element={<Users />} />
              </Route>
            </Routes>
          </div>
        </ApolloProvider>
      </AuthCtx.Provider>

      {/* The Toaster component displays messages on a popup  */}
      <div id="toaster-portal"></div>
    </>
  );
}

export default App;
