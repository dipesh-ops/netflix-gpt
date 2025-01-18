import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  
  const navigate = useNavigate();
  const user = useSelector((store => store.user));
  
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
    <div className='absolute w-screen top-2 flex justify-between items-center'>
      <img className='w-48' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="icon" />

      {user && 
      <div className="flex">
      <img className="w-10 h-10" src={user.photoUrl} alt="" />
      <button onClick={signingOut}>Sign Out</button>
    </div>}
    </div>
  )
}

export default Header
