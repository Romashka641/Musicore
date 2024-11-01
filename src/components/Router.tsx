import { Link } from "react-router-dom";
import "./css/Router.css"
import { House, CircleUserRound } from 'lucide-react';

export default function Router() {

  return (
    <>
      <div className="router">
         <hr className="hr" />
         <div className="home route">
            <Link to="/"></Link>
            <House className="homeIcon icon" />
         </div>
         <div className="profile route">
            <Link to="/me"></Link>
            <CircleUserRound className="profileIcon icon" />
         </div>
      </div>
    </>
  )
}
