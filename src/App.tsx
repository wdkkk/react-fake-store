import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import "./style.scss";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
