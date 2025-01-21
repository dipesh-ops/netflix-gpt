import { useState, useRef } from "react"
import { validateUser } from "../utils/validateUser";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase';
import Header from "./Header";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_AVATAR } from "../utils/Constants";

const Login = () => {

    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    
    const [isLogInUser, setIsLoginUser] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleClick=()=>{
        setIsLoginUser(!isLogInUser);
    }

    const handleFormSubmit=()=>{   
      console.log(email.current.value);
      console.log(password.current.value);

      const message = validateUser(email.current.value, password.current.value);
      console.log(message);
      setErrorMessage(message);

      if(message) return;

      if (!isLogInUser) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: PHOTO_AVATAR
          }).then(() => {
               const {uid , email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          // ..
        });
      } else{
        // login logic

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
      }
    }

  return (
    <div>
      <Header/>
      <div className="landing-page">
        <div className="wrapper">
            <form onSubmit={e=> e.preventDefault()} className="absolute w-4/12 text-white top-44 mx-auto right-0 left-0 bg-black bg-opacity-70 p-10">
                <h1 className="font-bold text-3xl mb-6">{isLogInUser ? "Sign In" : "Sign Up"}</h1>
                {!isLogInUser && <input ref={name} required className="w-full my-3 p-3 bg-transparent border-2" type="text" placeholder="Enter Your Name"/>}
                <input required ref={email} className="w-full my-3 p-3 bg-transparent border-2" type="text" placeholder="Enter Your Email"/>
                <input required  ref={password} className="w-full my-3 p-3 bg-transparent border-2" type="password" placeholder="Password"/>
                <p className="text-red-500 font-bold">{errorMessage}</p>
                <button onClick={handleFormSubmit} className="rounded-md w-full bg-red-600 p-3 mt-2 font-bold" >{isLogInUser ? "Sign In" : "Sign Up"}</button>
                <p className="mt-4 cursor-pointer" onClick={handleClick}>{isLogInUser ? "New to Netflix?" : "Already a User?"} <span className="font-bold">{isLogInUser ? "Sign Up Now.":"Sign In Now."}</span></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
