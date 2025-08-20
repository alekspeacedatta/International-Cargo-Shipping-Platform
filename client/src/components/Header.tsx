import { Link } from "react-router-dom"
import Button from "./commons/Button"

const Header = () => {
  return (
    <header>
        <div className="header-content">
            <Link to='/'>        
                <h2>ICSP</h2>
            </Link>
            <div className="authentication profile">
                <Link to='/reg'><Button buttonText="Register" submit={false}/></Link>
                <Link to='/log'><Button buttonText="Login" submit={false}/></Link>
                <Link to='/user'><h2>Me</h2></Link>
            </div>
        </div>
    </header>
  )
}
export default Header