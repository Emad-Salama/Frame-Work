import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Portofolio from './Components/Portofolio/Portofolio'
import Contact from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portofolio",
          element: <Portofolio />
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
