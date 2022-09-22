import { useContext } from "react";
import AuthCtx from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthCtx);

  return (
    <div className="header">
      {user ? (
        <button onClick={logout}>LogOut</button>
      ) : (
        <button onClick={() => navigate("/login")}>LogIn</button>
      )}
    </div>
  );
};

export default Header;
