import { useState } from "react"

const Login = () => {

    const [isLogInUser, setIsLoginUser] = useState(true);

    const handleClick=()=>{
        setIsLoginUser(!isLogInUser);
    }
  return (
    <div>
      <div className="landing-page">
        <div className="wrapper">
            <form className="absolute text-white top-44 mx-auto right-0 left-0 bg-black bg-opacity-70 p-10">
                <h1 className="font-bold text-3xl mb-6">{isLogInUser ? "Sign In" : "Sign Up"}</h1>
                {isLogInUser ? "" : <input className="w-full my-3 p-3 bg-transparent border-2" type="text" placeholder="Enter Your Name"/>}
                <input className="w-full my-3 p-3 bg-transparent border-2" type="text" placeholder="Enter Your Email"/>
                <input className="w-full my-3 p-3 bg-transparent border-2" type="password" placeholder="Password"/>
                <button className="rounded-md w-full bg-red-600 p-3 mt-2 font-bold">{isLogInUser ? "Sign In" : "Sign Up"}</button>
                <p className="mt-4 cursor-pointer" onClick={handleClick}>{isLogInUser ? "New to Netflix?" : "Already a User?"} <span className="font-bold">{isLogInUser ? "Sign Up Now.":"Sign In Now."}</span></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
