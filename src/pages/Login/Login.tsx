import { createRef, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthCtx from "../../context/authContext";

export default function Login() {
  const ctx = useContext(AuthCtx);
  if (ctx.user) return <Navigate to="/profile" />;

  const email = createRef<HTMLInputElement>();
  const password = createRef<HTMLInputElement>();

  return (
    <div>
      <input ref={password} type="password" />
      <input ref={email} type="email" />
      <button
        app-role="login"
        onClick={() => ctx.login(email.current!.value, password.current!.value)}
      >
        Login
      </button>
    </div>
  );
}
