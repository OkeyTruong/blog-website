import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return(
        <div className="register">
            <span className="registerTitle">register</span>
            <form action="" className="registerForm">
                <label >email</label>
                <input type="email" className="registerInput" placeholder="Enter your email..."/>
                <label >password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..."/>
            <button className="registerButton">register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to='/login'>login</Link>

            </button>
        </div>
    )
}
