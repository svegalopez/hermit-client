import { createRef, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthCtx from "../../context/authContext";
import ToastCtx from "../../context/toastContext";

export default function Login() {
  const { user, login, logout } = useContext(AuthCtx);
  const toastCtx = useContext(ToastCtx);

  if (user) return <Navigate to="/profile" />;

  const email = createRef<HTMLInputElement>();
  const password = createRef<HTMLInputElement>();

  const handleLogin = () => {
    login(email.current!.value, password.current!.value).catch((err) => {
      console.error(err);
      toastCtx.toast(
        <p>
          {err.message || "Cannot login at this time. See console for details"}
        </p>
      );
      logout();
    });
  };

  return (
    <div>
      <input ref={password} type="password" />
      <input ref={email} type="email" />
      <button app-role="login" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
