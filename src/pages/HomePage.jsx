import Button from '../components/Button'

const HomePage = () => {
  const stats = [
    { number: '12', label: 'Projects Completed', icon: '' },
    { number: '8', label: 'Technologies', icon: '' },
    { number: '25', label: 'GitHub Repos', icon: '' },
    { number: '2+', label: 'Years Experience', icon: '' },
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React and Node.js featuring product catalog, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    },
    {
      id: 3,
      title: 'Weather Forecast Dashboard',
      description: 'An interactive weather dashboard with location-based forecasts, real-time weather updates, and beautiful visualizations.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      tags: ['React', 'API', 'Chart.js', 'Axios'],
    },
  ]

  return (
    <div className='space-y-32 pb-32'>
      {/* HERO SECTION */}
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-6 lg:px-8 pt-24'>
        {/* Left Content */}
        <div className='space-y-6 lg:space-y-8 order-2 lg:order-1'>
          <div className='inline-block'>
            
          </div>
          
          <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
            Hi, I'm <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Jean Paula</span>
          </h1>
          
          <p className='text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl font-medium'>
            Full-stack web developer & IT student passionate about building modern, responsive web applications with clean code and beautiful UI/UX design.
          </p>

          <p className='text-base text-gray-600 leading-relaxed max-w-2xl'>
            I specialize in React, Tailwind CSS, and modern web technologies. Always learning, always growing. Let's create something amazing together!
          </p>
          
          <div className='flex flex-wrap gap-4 pt-6'>
            <Button variant='primary' size='lg' className='gap-2'>
              View Projects
            </Button>
            <Button variant='outline' size='lg' className='border-blue-600 text-blue-600'>
               Contact Me
            </Button>
          </div>

          {/* Quick Links */}
          <div className='flex gap-6 pt-6 border-t border-gray-200'>
            <a href='#' className='text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm'>
              GitHub →
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm'>
              LinkedIn →
            </a>
            <a href='#' className='text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm'>
              Twitter →
            </a>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
          <div className='relative w-full max-w-sm'>
            <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30'></div>
            <img 
              src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop'
              alt='Developer working on laptop'
              className='relative w-full h-auto rounded-2xl shadow-2xl object-cover aspect-square'
            />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 space-y-12'>
        <div className='text-center space-y-3'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>By The Numbers</h2>
          <p className='text-gray-600 text-lg'>A quick snapshot of my development journey</p>
        </div>
        
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className='group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 text-center cursor-pointer'
            >
              <div className='text-4xl mb-3 group-hover:scale-110 transition-transform duration-300'>
                {stat.icon}
              </div>
              <div className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>
                {stat.number}
              </div>
              <div className='text-gray-700 font-medium text-sm md:text-base'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 space-y-12'>
        <div className='space-y-3'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>Featured Projects</h2>
          <p className='text-gray-600 text-lg'>A selection of my recent work and side projects</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div 
              key={index}
              className='group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full'
            >
              {/* Project Image */}
              <div className='relative w-full h-56 overflow-hidden bg-gray-100'>
                <img 
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Content */}
              <div className='p-6 space-y-4 flex-1 flex flex-col'>
                <h3 className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>
                  {project.title}
                </h3>

                <p className='text-gray-600 flex-1 leading-relaxed'>
                  {project.description}
                </p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className='text-xs font-medium px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className='pt-2'>
                  <Button variant='ghost' size='md' className='text-blue-600 hover:text-blue-700 self-start'>
                    View Project →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className='flex justify-center pt-8'>
          <Button variant='outline' size='lg' className='border-blue-600 text-blue-600'>
            View All Projects
          </Button>
        </div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 space-y-12'>
        <div className='space-y-3 text-center'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>Tech Stack</h2>
          <p className='text-gray-600 text-lg'>Technologies I work with</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {[
            { name: 'React', emoji: '' },
            { name: 'JavaScript', emoji: '' },
            { name: 'Tailwind CSS', emoji: '' },
            { name: 'Node.js', emoji: '' },
            { name: 'MongoDB', emoji: '' },
            { name: 'Git & GitHub', emoji: '' },
          ].map((tech, i) => (
            <div 
              key={i}
              className='bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer'
            >
              <div className='text-4xl mb-2 group-hover:scale-125 transition-transform duration-300'>
                {tech.emoji}
              </div>
              <p className='font-semibold text-gray-900 text-sm'>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 py-16'>
        <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 lg:p-16 text-center space-y-8 shadow-2xl'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white'>
            Let's Build Something Great
          </h2>
          <p className='text-white/90 text-lg max-w-2xl mx-auto'>
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className='flex flex-wrap justify-center gap-4 pt-4'>
            <Button variant='primary' size='lg' className='bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700'>
              Start a Project
            </Button>
            <Button variant='outline' size='lg' className='border-white text-white hover:bg-white/10'>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage