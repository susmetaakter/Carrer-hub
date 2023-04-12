import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import Header from './components/Header'
import JobDetails from './components/JobDetails'
import ErrorPage from './components/ErrorPage'
import AppliedJobs from './components/AppliedJobs'
import CustomCartLoader from './components/Customloader'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
      path: '/',
      element: <Header />
     },
     {
      path: '/JobDetails/:id',
      element: <JobDetails />,
      loader: () => fetch('/data2.json')
     },
     {
      path: 'appliedjobs',
      element: <AppliedJobs />,
      loader: CustomCartLoader 
     },
     {
      path: 'Statistics',
      element: <Statistics />
     },
     {
      path: 'blog',
      element: <Blog />
    },
  ],
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router = {router} />)
