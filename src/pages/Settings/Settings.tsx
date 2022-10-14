import { useContext } from "react";
import AuthCtx from "../../context/authContext";
import { Link, Navigate, Outlet } from "react-router-dom";
import myImg from "./astro.png";
import "./Settings.scss";

export default function Settings() {
  const auth = useContext(AuthCtx);
  if (!auth.user) return <Navigate to="/" />;
  return (
    <div className="hc-settings">
      {/* <h1 className="welcome-heading">{auth.user.email}</h1>
      <img src={myImg} alt="astronaut" className="avatar" /> */}
      <div className="tab-bar">
        <div className="tab">
          <Link to="change-password">
            <h3>Change Password</h3>
          </Link>
        </div>
        <div className="tab">
          <Link to="profile">
            <h3>Profile</h3>
          </Link>
        </div>
        <div className="tab">
          <Link to="billing">
            <h3>Billing</h3>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
