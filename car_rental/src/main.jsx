import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Cars from './pages/CarList/Cars.jsx'
import Contact from './pages/Contact.jsx'
import  {Register}  from './pages/Register.jsx'
import {Login} from './pages/Login.jsx'
import Payment from './payment/payment.jsx'
import PickUpForm from './pages/pickup/PickUpForm.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PickupForm from './pages/pickup/PickUpForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "cars",
    element: <Cars />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "payment",
    element: <Payment />,
  },
  {
    path: "pickup",
    element: <PickUpForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
