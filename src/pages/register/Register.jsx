import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  return (
    <div className="register">
        <div className="card">
            <div className="right">
                <h1>
                    Register
                </h1>
                <form>
                    <input type="text" placeholder="Full Name..." />
                    <input type="text" placeholder="Username..." />
                    <input type="email" placeholder="Email..." />
                    <input type="password" placeholder="Password..." />
                    <input type="password" placeholder="Confirm Password..." />
                    
                    <button>Register</button>
                </form>
            </div>
            <div className="left">
                <h1>
                    Social Media.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eos tempore voluptates veritatis ad, dolorum explicabo officiis totam officia. 
                    Consectetur velit nihil sed alias? Nisi, nihil.
                </p>
                <span>Already have an account?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Register