import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import Applied from './components/Applied'
import Header from './components/Header'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
      path: '/',
      element: <Header />
     },
     {
      path: 'id',
      element: <viewDetails />
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
