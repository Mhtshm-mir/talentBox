import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from '../app/App'
import Signin from '../features/Auth/Signin'
import Dashboard from '../pages/Dashboard'
import Courses from '../features/Courses/Courses'
function AppRouter() {

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/",
        element:<Dashboard/>},
               {path:"signin",
            element:<Signin/>},
                {path:"courses",
            element:<Courses/>}
        ]
    }
    


])


  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter
