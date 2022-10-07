import { useContext } from "react";
import AuthCtx from "../../context/authContext";
import { Navigate } from "react-router-dom";
import myImg from "./astro.png";

export default function Settings() {
  const auth = useContext(AuthCtx);
  if (!auth.user) return <Navigate to="/" />;
  return (
    <div className="settings-page">
      <h1 className="welcome-heading">{auth.user.email}</h1>
      <img src={myImg} alt="" className="src" />
    </div>
  );
}
