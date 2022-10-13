import { useContext } from "react";
import AuthCtx from "../../context/authContext";
import hermit from "./hermit.png";
import "./Home.scss";

export default function Home() {
  const auth = useContext(AuthCtx);
  return (
    <div className="home">
      <h1>Hermit</h1>
      <img src={hermit} alt="a red hermit crab" className="hermit-img" />
    </div>
  );
}
