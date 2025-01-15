import { useState, useRef } from "react"
import { validateUser } from "../utils/validateUser";

const Login = () => {

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const [isLogInUser, setIsLoginUser] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleClick=()=>{
        setIsLoginUser(!isLogInUser);
    }

    const handleFormSubmit=(e)=>{
      e.preventDefault();
      console.log(name.current.value);      
      console.log(email.current.value);
      console.log(password.current.value);

      const message = validateUser(name.current.value, email.current.value, password.current.value);
      console.log(message);
      setErrorMessage(message);
    }

  return (
    <div>
      <div className="landing-page">
        <div className="wrapper">
            <form onSubmit={e=>handleFormSubmit(e)} className="absolute text-white top-44 mx-auto right-0 left-0 bg-black bg-opacity-70 p-10">
                <h1 className="font-bold text-3xl mb-6">{isLogInUser ? "Sign In" : "Sign Up"}</h1>
                {isLogInUser ? "" : <input required ref={name} className="w-full my-3 p-3 bg-transparent border-2" type="text" placeholder="Enter Your Name"/>}
                <input required ref={email} className="w-full my-3 p-3 bg-transparent border-2" type="text" placeholder="Enter Your Email"/>
                <input required  ref={password} className="w-full my-3 p-3 bg-transparent border-2" type="password" placeholder="Password"/>
                <p className="text-red-500 font-bold">{errorMessage}</p>
                <button className="rounded-md w-full bg-red-600 p-3 mt-2 font-bold" >{isLogInUser ? "Sign In" : "Sign Up"}</button>
                <p className="mt-4 cursor-pointer" onClick={handleClick}>{isLogInUser ? "New to Netflix?" : "Already a User?"} <span className="font-bold">{isLogInUser ? "Sign Up Now.":"Sign In Now."}</span></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
