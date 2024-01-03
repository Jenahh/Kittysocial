import "./register.css"

export default function Register() {
  return (
    <div className ="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Kittysocial</h3>
                <span className="loginDesc">
                    Interact with friends and others on Kittysocial! 
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput"/>
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <input placeholder="Confirm Password" className="loginInput"/>
                    <button className="loginButton">Create Account</button>
                    <button className="loginRegisterButton">
                        Log In
                        </button>
                </div>
            </div>
        </div>
    </div>
  )
}
