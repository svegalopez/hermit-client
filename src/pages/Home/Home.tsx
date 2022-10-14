import hermit from "./hermit.png";
import "./Home.scss";

export default function Home() {
  return (
    <div className="hc-home">
      <h1>Hermit</h1>
      <img src={hermit} className="hermit-img" alt="a red hermit crab" />
    </div>
  );
}
