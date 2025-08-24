import { Route, Routes } from "react-router-dom"
import ChoicePage from "./ChoicePage"
import Register from "../components/Register"
import Login from "../components/Login"
import Dashboard from "../components/Dashboard"

const App = () => {
    return (

        <Routes>
            <Route path="/" element={<ChoicePage/>}/>

            <Route path="/client/register" element={<Register/>}/>
            <Route path="/client/login" element={<Login/>}/>
            <Route path="/client/dashboard" element={<Dashboard/>}/>
        </Routes>

    )
}
export default App