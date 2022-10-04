import { useContext } from "react";
import AuthCtx from "../../context/authContext";
import { Navigate } from "react-router-dom";

export default function Home() {
  const auth = useContext(AuthCtx);
  return <h1>Home</h1>;
}
