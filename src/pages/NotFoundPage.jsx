import { Link } from 'react-router-dom'
import Button from '../components/Button'

const NotFoundPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-6'>
      <div className='text-center space-y-8 max-w-2xl'>
        {/* 404 Display */}
        <div className='space-y-4'>
          <h1 className='text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2'>
            404
          </h1>
          <p className='text-lg text-gray-500'>Page Not Found</p>
        </div>

        {/* Description */}
        <div className='space-y-3'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>
            Oops! We couldn't find that page
          </h2>
          <p className='text-lg text-gray-600 leading-relaxed'>
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable. But don't worry, let's get you back on track.
          </p>
        </div>

        {/* Illustration or Icon */}
        <div className='py-8'>
          <svg
            className='w-32 h-32 mx-auto text-gray-300 hover:text-gray-400 transition-colors'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1}
              d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
          <Button
            to='/'
            variant='primary'
            size='lg'
            className='w-full sm:w-auto'
          >
            ← Back to Home
          </Button>
          <Button
            to='/articles'
            variant='outline'
            size='lg'
            className='w-full sm:w-auto'
          >
            View Articles →
          </Button>
        </div>

        {/* Helpful Links */}
        <div className='pt-12 border-t border-gray-200'>
          <p className='text-gray-600 text-sm mb-6'>
            Need help? Here are some useful links:
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <Link
              to='/'
              className='p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group'
            >
              <p className='font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                Home
              </p>
              <p className='text-sm text-gray-600'>Back to the homepage</p>
            </Link>
            <Link
              to='/about'
              className='p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group'
            >
              <p className='font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                About
              </p>
              <p className='text-sm text-gray-600'>Learn about me</p>
            </Link>
            <Link
              to='/articles'
              className='p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group'
            >
              <p className='font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                Articles
              </p>
              <p className='text-sm text-gray-600'>Read my content</p>
            </Link>
          </div>
        </div>

        {/* Additional Message */}
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8'>
          <p className='text-blue-900 text-sm'>
            <span className='font-semibold'>Did you find a broken link?</span>
            <br />
            Please report it so we can fix it quickly. Your feedback helps us improve!
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
