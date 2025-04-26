import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Users from './Users.jsx';
import Update from './Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`)

  },
  {
    path:'/users',
    element: <Users></Users>,
    loader: ()=>fetch('http://localhost:5000/users')
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
