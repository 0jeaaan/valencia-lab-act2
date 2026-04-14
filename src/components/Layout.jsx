import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <NavBar />
      <main className='pt-20 flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout