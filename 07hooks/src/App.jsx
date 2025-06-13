import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from '../../05reactRouter/src/component/home/Home'
import Multiplier from './component/Multiplier'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='/useState' element={<Multiplier/>} />
      </Route>
    )
  )

  return (
    <>
      {/* <RouterProvider router={router}> </RouterProvider> */}
      <Multiplier />
    </>
  )
}

export default App
