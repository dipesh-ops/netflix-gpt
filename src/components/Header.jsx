import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_MAIN_LOGO } from "../utils/Constants";


const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);


  useEffect(()=>{
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName, photoURL} = user;
        dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
     return () => unsubscibe();
  }, [])
  const signingOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch(() => {
      // An error happened.
      navigate('*')
    });
  }

 
  return (
    <div className='absolute w-screen flex justify-between items-center z-10'>
      <img className='w-48' src={NETFLIX_MAIN_LOGO} alt="icon" />

      {user && 
      <div className="flex">

      <img className="w-10 h-10 hidden md:block" src={user.photoURL} alt="" />
      <button className="text-white" onClick={signingOut}>Sign Out</button>
    </div>}
    </div>
  )
}

export default Header
