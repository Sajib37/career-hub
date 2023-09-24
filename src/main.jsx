import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Jobs from './components/Jobs/Jobs';
import Applied from './components/Applied/Applied';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,  
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
        loader:()=>fetch('../data/jobs.json')
      },
      {
        path: "/applied-jobs",
        element: <Applied></Applied>,
        loader: ()=>fetch('../data/jobs.json')
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: ()=>fetch('../data/blog.json')
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('../data/jobs.json')
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
