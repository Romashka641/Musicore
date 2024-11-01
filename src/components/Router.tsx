import { Link } from "react-router-dom";
import "./css/Router.css"

export default function Router() {

  return (
    <>
      <div className="router">
         <hr />
         <div className="home route">
            <Link to="/"></Link>
            <img src="../public/home.svg" className="homeicon icon" />
         </div>
         <div className="profile route">
            <Link to="/me"></Link>
            <img src="../public/circle-user-round.svg" className="profileicon icon" />
         </div>
      </div>
    </>
  )
}
