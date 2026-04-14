import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  variant = 'glass-black',
  size = 'md',
  className = '',
  to,
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 cursor-pointer inline-flex items-center justify-center gap-2 backdrop-blur-md'
  
  const variants = {
    // Glassmorphism with BLACK TEXT (better readability)
    'glass-black': 'bg-white/30 border border-white/40 text-gray-900 hover:bg-white/40 hover:shadow-xl hover:shadow-white/30 active:scale-95 shadow-lg hover:scale-105',
    
    'glass-light': 'bg-white/20 border border-white/30 text-gray-900 hover:bg-white/30 hover:shadow-xl hover:shadow-white/20 active:scale-95 shadow-lg hover:scale-105',
    
    // Glassmorphism with WHITE TEXT
    'glass-white': 'bg-black/30 border border-white/30 text-white hover:bg-black/40 hover:shadow-xl hover:shadow-white/20 active:scale-95 shadow-lg hover:scale-105',
    
    'glass-dark': 'bg-black/20 border border-white/20 text-white hover:bg-black/30 hover:shadow-xl hover:shadow-black/30 active:scale-95 shadow-lg hover:scale-105',
    
    // Solid variants (backward compatibility)
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-200 active:scale-95 shadow-md hover:scale-105',
    
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md active:scale-95 hover:scale-105',
    
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95 hover:scale-105 hover:border-blue-700',
    
    ghost: 'text-gray-900 hover:bg-gray-100 active:scale-95 hover:scale-105',
    
    accent: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-200 active:scale-95 shadow-md hover:scale-105'
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  }

  const buttonClasses = `${baseStyles} ${variants[variant] || variants['glass-black']} ${sizes[size]} ${className}`

  // If it's a link, render as Link
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    )
  }

  // Otherwise render as button
  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button