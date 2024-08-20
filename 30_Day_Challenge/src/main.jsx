import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ScoreSheet from './pages/ScoreSheet.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import DailyTaskPage from './pages/DailyTaskPage.jsx'


const Layout =()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />

    </div>
  );
};

const router = createBrowserRouter([{
  path: '/',
  element:<Layout />,
  children:[{
    path:'/',
    element: <App />
  },
  {
    path:'/dailyTask',
    element: <DailyTaskPage />
  },
  {
    path:'/scoresheet',
    element: <ScoreSheet />
  },
  {
    path:'/register',
    element: <RegisterPage />
  },
  {
    path:'/',
    element: <App />
  },
]
}])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
