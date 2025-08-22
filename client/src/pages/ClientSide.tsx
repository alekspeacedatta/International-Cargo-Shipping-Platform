import { Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import '../index.css'
import Register from "../components/Register"
import Login from "../components/Login"
import Profile from "../components/Profile"
import { useAuthStore } from "../stores/useAuthStore"
const App = () => {
    const userID = useAuthStore(state => state.user?._id);
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
            <Route path={"/user/"+userID} element={
                <>
                    <Profile/>
                </> }/>
            <Route path="/user" element={<><h2>user is not logined</h2></>} />
        </Routes>
    </>
  )
}
export default App