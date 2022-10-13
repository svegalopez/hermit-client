import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthCtx from "../../context/authContext";

export default function Iam() {
  const auth = useContext(AuthCtx);
  if (!auth.user) return <Navigate to="/" />;
  if (!auth.user.roles.includes("admin")) return <Navigate to="/" />;

  return (
    <div>
      <h1>Iam</h1>
      <Outlet />
    </div>
  );
}
