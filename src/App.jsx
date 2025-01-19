import Login from './components/Login'
import Browse from './components/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';

const App = () => {

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

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
