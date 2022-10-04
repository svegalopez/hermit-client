import { createRef, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthCtx from "../../context/authContext";
import Toaster from "../../components/Toaster";

export default function Login() {
  const { user, login, logout } = useContext(AuthCtx);
  const [msg, setMsg] = useState<JSX.Element | null>(null);

  if (user) return <Navigate to="/" />;

  const email = createRef<HTMLInputElement>();
  const password = createRef<HTMLInputElement>();

  const handleLogin = () => {
    login(email.current!.value, password.current!.value).catch((err) => {
      console.error(err);
      setMsg(
        <p>
          {err.message || "Cannot login at this time. See console for details"}
        </p>
      );
    });
  };

  return (
    <div>
      <input ref={password} type="password" />
      <input ref={email} type="email" />
      <button app-role="login" onClick={handleLogin}>
        Login
      </button>
      {msg && <Toaster content={msg} setContent={setMsg} />}
    </div>
  );
}
