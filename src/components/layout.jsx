import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartTab from './cartTab'

const Layout = () => {
  return (
    <div className='bg-lime-300'>
      <main className='w-[1200px] max-w-full m-auto p-5'>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  )
}

export default Layout