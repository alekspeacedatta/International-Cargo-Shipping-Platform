import { Link } from "react-router-dom"
import { Button } from "./commons/Button"
import { useAuthStore } from "../stores/useAuthStore"


const Header = () => {
  const userID = useAuthStore(state => state.user?._id);
  return (
    <header>
        <div className="flex max-w-6xl py-3  items-center justify-between m-auto">
            <Link to='/' className="text-dark-500  text-2xl text-dark-900 font-bold no-underline">    
                <h2 >Logo</h2>
            </Link>
            <div className="flex items-center gap-1.2">
                <Link to='/reg'><Button className=" bg-transparent text-dark-500 border-3 border-dark-500 w-25 py-0.5 rounded-[10px] font-semibold hover:bg-dark-500 hover:text-white">Register</Button></Link>
                <Link to='/log'><Button className="bg-dark-500 border-3 border-dark-500 w-25 rounded-[10px] py-0.5 font-semibold text-light-500 hover:bg-light-500 hover:text-dark-500 ">Login</Button></Link>
                <Link to='/client/dashboard'><i className="fa-solid fa-circle-user text-3xl text-dark-500 text-4xl"></i></Link>
            </div>
        </div>
    </header>
  )
}
export default Header