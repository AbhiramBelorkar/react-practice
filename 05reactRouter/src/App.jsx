import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Header from './component/header/Header'
import { RouterProvider, Routes, Route } from 'react-router'
import Home from './component/home/Home'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import GitHub, { githubInfoLoader } from './component/gitHub/GitHub'
import User from './component/user/User'

function App() {

  // const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Layout />,
  //       children : [
  //         {
  //           path:"",
  //           element:<Home />
  //         },
  //         {
  //           path:"about",
  //           element:<About />
  //         },
  //         {
  //           path:"contact",
  //           element:<Contact />
  //         }
  //       ]

  //     }
  //   ]
  // )

  /*****Another way of creating browser router ********/

  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='/user/:userid' element={<User/>}></Route>
        <Route 
          loader={githubInfoLoader}
          path='gitHub' 
          element={<GitHub />}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
