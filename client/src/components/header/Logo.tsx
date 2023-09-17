import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div className="grid grid-flow-col w-44">
        <div className="self-center pl-2 pr-1">
          <img src="logo.png" alt="logo" className="cyan-drop-shadow" />
        </div>
        <span className="font-logo font-extrabold text-3xl text-center self-center">
          Kinance
        </span>
      </div>
    </Link>
  );
}
export default Logo;
