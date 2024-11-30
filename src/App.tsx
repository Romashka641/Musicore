import { Outlet } from "react-router-dom"
import Router from "./components/Router"
import "./index.css"

function App() {
  return (
    <>
      <Outlet />
      <Router />
    </>
  )
}

export default App
