import "./login.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {

const {currentUser} = useContext(AuthContext);

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>
                    Hello World.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eos tempore voluptates veritatis ad, dolorum explicabo officiis totam officia. 
                    Consectetur velit nihil sed alias? Nisi, nihil.
                </p>
                <span>Don't have an account?</span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>
                    Login
                </h1>
                <form>
                    <input type="text" placeholder="Username..." />
                    <input type="password" placeholder="Password..." />
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login