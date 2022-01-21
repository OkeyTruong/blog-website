import "./login.css"

export default function Login() {
    return(
        <div className="login">
            <span className="loginTitle">login</span>
            <form action="" className="loginForm">
                <label >email</label>
                <input type="email" className="loginInput" placeholder="Enter your email..."/>
                <label >password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..."/>
            <button className="loginButton">login</button>
            </form>
            <button className="loginRegisterButton">Register</button>
        </div>
    )
}
