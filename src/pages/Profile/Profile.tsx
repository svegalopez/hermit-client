import { useContext } from "react";
import AuthCtx from "../../context/authContext";
import { Navigate } from "react-router-dom";

export default function Profile() {
  const auth = useContext(AuthCtx);
  if (!auth.user) return <Navigate to="/" />;
  return <h1 className="welcome-heading">{auth.user.email}</h1>;
}
