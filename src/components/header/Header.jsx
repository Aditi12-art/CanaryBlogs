import "./header.css";
import Canary from "./Canary.jfif";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Canary</span>
        <span className="headerTitleLg">BLOGS</span>
      </div>
      <img
        className="headerImg"
        src={Canary}
        alt=""
      />
    </div>
  );
}
