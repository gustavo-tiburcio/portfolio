import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Contact from './routes/Contatc/Contact.jsx'
import Home from './routes/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    component: <App />,
    children: [
      {
        path: '/',
        exact: true,
        component: <Home />
      },

      {
        path: '/contact',
        component: <Contact />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  )
