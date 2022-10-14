import "./Header.scss";
import { useContext } from "react";
import AuthCtx from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Settings, Home } from "react-feather";

const Header = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthCtx);

  return (
    <div className="hc-header">
      {user ? (
        <button onClick={logout}>LogOut</button>
      ) : (
        <button onClick={() => navigate("/login")}>LogIn</button>
      )}
      <Home onClick={() => navigate("/")} className="icon" color="black" />
      <Settings
        onClick={() => navigate("/settings")}
        className="icon"
        color="black"
      />
    </div>
  );
};

export default Header;
