import { Link, Routes, Route } from "react-router-dom";
import "./css/Router.css"
import { House, CircleUserRound } from 'lucide-react';
import HomePage from "./pages/Home"

export default function Router() {

  return (
    <>
      <div className="router">
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
      <Routes>
        <Route path="/" component={<HomePage />} />
        <Route path="/me" component={<ProfilePage />} />
      </Routes>
    </>
  )
}
