import { Routes, Route } from "react-router-dom"
import Header from "./Header"
import '../index.css'
import Register from "./Register"
import Login from "./Login"
import Profile from "./Profile"
const App = () => {
  return (
    <>
        <Header></Header>
        <Routes>
            <Route path="/reg" element={
                <>
                    <div className="authentication">
                        <Register/>
                    </div>
                </> }/>
            <Route path="/log" element={
                <>
                    <div className="authentication">
                        <Login/>
                    </div>
                </> }/>
            <Route path="/user" element={
                <>
                    <Profile/>
                </> }/>
        </Routes>
    </>
  )
}
export default App