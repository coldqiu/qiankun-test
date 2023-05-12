import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Dashboard'
import App from './App.jsx'

import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="dashboard" element={<Dashboard />} />
      {/* ... etc. */}
    </Route>
  ), {
  basename: window.__MICRO_APP_BASE_ROUTE__ || '/'
}
);

ReactDOM.createRoot(document.getElementById('root-child1')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
