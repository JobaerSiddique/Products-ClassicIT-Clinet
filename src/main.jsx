import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Pages/Routes/Router.jsx'
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
<RouterProvider router={router}/>
</AuthProvider>
  
)
