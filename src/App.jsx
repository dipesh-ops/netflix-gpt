import Header from './components/Header'
import Login from './components/Login'
import Browse from './components/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import ErrorPage from './components/ErrorPage';

const App = () => {

  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },{
      path : '/browse',
      element : <Browse />
    },
    {
      path : '*',
      element : <ErrorPage/>
    }

  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName, photoURL} = user;
        dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
        // ...
      } else {
        dispatch(removeUser());
      }
    });
  }, [])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
