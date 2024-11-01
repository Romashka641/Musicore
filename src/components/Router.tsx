import { Link } from "react-router-dom";
import "./css/Router.css"
import { House, CircleUserRound } from 'lucide-react';

export default function Router() {

  return (
    <>
      <div className="router">
         <hr className="hr" />
         <div className="home route">
            <Link to="/">
              <House className="homeIcon icon" />
            </Link>
         </div>
         <div className="profile route">
            <Link to="/me">
              <CircleUserRound className="profileIcon icon" />
            </Link>
         </div>
      </div>
    </>
  )
}
