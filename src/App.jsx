import Header from "./Components/Header";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/Protected/ProtectedRoute";

export default function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          
          <Route path="/" element={"This is our home page"} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>



    </>
  )
}