import { Link } from "react-router-dom"
import { Button } from "./commons/Button"
import { useAuthStore } from "../stores/useAuthStore"


const Header = () => {
  const userID = useAuthStore(state => state.user?._id);
  return (
    <header>
        <div className="header-content p-2.5 max-w-[90vw] md:max-w-[80vw] lg:max-w-[65vw] mx-auto flex justify-between items-center">
            <Link to='/'>        
                <h2>ICSP</h2>
            </Link>
            <div className="authentication profile">
                <Link to='/reg'><Button>Register</Button></Link>
                <Link to='/log'><Button>Login</Button></Link>
                <Link to={'/user/'+userID}><i className="fa-solid fa-circle-user"></i></Link>
            </div>
        </div>
    </header>
  )
}
export default Header