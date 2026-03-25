import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className='min-h-screen bg-white'>
      <NavBar />
      <main className='pt-20'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout