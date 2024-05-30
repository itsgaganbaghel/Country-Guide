import React from 'react'
import App from './App'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
    {/* <App/> */}
    <Outlet />
    </div>
  )
}

export default Layout