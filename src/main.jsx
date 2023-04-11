import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import Applied from './components/Applied'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
      path: '/',
      element: <Home />,
     },
     {
      path: 'Statistics',
      element: <Statistics />
     },
     {
      path: 'blog',
      element: <Blog />
    },
    {
      path: 'applied',
      element: <Applied />
    },
  ],
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router = {router} />)
