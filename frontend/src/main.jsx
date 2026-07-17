import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import SolutionPage from './pages/SolutionPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import GalleryPage from './pages/GalleryPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

import SupportPage from './pages/SupportPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/solutions', element: <SolutionPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/products', element: <ProductsPage /> },
      {path:'/Gallery',element: <GalleryPage/>},
      { path: '/products/:slug', element: <ProductDetailsPage /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
