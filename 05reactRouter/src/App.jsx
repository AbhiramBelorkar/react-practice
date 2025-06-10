import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Header from './component/header/Header'
import { RouterProvider, Routes, Route } from 'react-router'
import Home from './component/home/Home'
import About from './component/about/About'
import Contact from './component/contact/Contact'

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
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
