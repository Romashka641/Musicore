import { Link, Routes, Route } from "react-router-dom";
import { House, CircleUserRound } from 'lucide-react';
import HomePage from "./pages/Home"
import ProfilePage from "./pages/Profile"
import "./css/Router.css"

export default function Router() {

  return (
    <>
      <div className="router">
         <div className="home route">
            <Link to="/home">
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
        <Route path="home" element={<HomePage />} />
        <Route path="me" element={<ProfilePage />} />
      </Routes>
    </>
  )
}
