import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const getLinkClass = ({ isActive }) => {
    return `px-4 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
      isActive 
        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-200' 
        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80'
    }`
  }

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between'>
        {/* Logo */}
        <NavLink to='/' className='flex items-center gap-2 group transition-transform duration-300 hover:scale-105'>
          <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg'>
            <span className='text-white font-bold text-lg'>JP</span>
          </div>
          <div className='hidden sm:block'>
            <h1 className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>JP Dev</h1>
            <p className='text-xs text-gray-500'>Web Developer</p>
          </div>
        </NavLink>

        {/* Navigation Links */}
        <div className='flex items-center gap-3 lg:gap-4'>
          <NavLink to='/' className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to='/about' className={getLinkClass}>
            About
          </NavLink>
          <NavLink to='/articles' className={getLinkClass}>
            Articles
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar