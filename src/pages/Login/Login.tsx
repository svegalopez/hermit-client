import { createRef, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthCtx from "../../context/authContext";

export default function Login() {
  const username = createRef();
  const ctx = useContext(AuthCtx);

  if (ctx.user) return <Navigate to="/profile" />;

  const handleClick = () => {
    ctx.login((username as any).current.value, "123");
  };

  return (
    <div>
      <input ref={username as any} type="text" />
      <button role="login" onClick={handleClick}>
        Login
      </button>
    </div>
  );
}
