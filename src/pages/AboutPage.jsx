import Button from '../components/Button'
import { Link } from 'react-router-dom'
import pfp from "../assets/pfp.jpg";

const AboutPage = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML/CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'RESTful APIs'] },
    { category: 'Tools & Methods', items: ['Git & GitHub', 'VS Code', 'Figma', 'Agile/Scrum', 'Firebase'] },
  ]

  const timeline = [
    { 
      year: '2022', 
      title: 'Started Learning Web Dev', 
      desc: 'Began my journey with HTML, CSS, and JavaScript fundamentals' 
    },
    { 
      year: '2023', 
      title: 'Mastered React & Tailwind', 
      desc: 'Deep-dived into React and modern CSS frameworks' 
    },
    { 
      year: '2024', 
      title: 'Full Stack Development', 
      desc: 'Expanded into backend development with Node.js and databases' 
    },
    { 
      year: '2025', 
      title: 'Professional Projects', 
      desc: 'Launched 12+ projects and contributed to open source' 
    },
  ]

  return (
    <div className='space-y-24 pb-32'>
      {/* HEADER */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 pt-24 space-y-4'>
        
        <h1 className='text-5xl lg:text-6xl font-bold text-gray-900'>
          Building digital experiences with <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>passion</span>
        </h1>
      </section>

      {/* PROFILE SECTION */}
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Profile Image */}
        <div className='flex justify-center order-2 lg:order-1'>
          <div className='relative w-full max-w-sm'>
            <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30'></div>
            <img src={pfp} alt="Profile" />
          </div>
        </div>

        {/* Profile Content */}
        <div className='space-y-6 order-1 lg:order-2'>
          <h2 className='text-4xl font-bold text-gray-900'>Hi, I'm Jean Paula </h2>
          
          <div className='space-y-4 text-gray-700 leading-relaxed'>
            <p>
              I'm an IT student with a passion for web development and a drive to create beautiful, functional digital experiences. 
              My journey started with curiosity and has evolved into a commitment to excellence in every project I undertake.
            </p>

            <p>
              I specialize in building responsive, user-centric web applications using modern technologies like React and Tailwind CSS. 
              Whether it's crafting sleek user interfaces or architecting robust backend systems, I'm always excited about the challenge.
            </p>

            <p>
              When I'm not coding, you'll find me learning new technologies, contributing to open source, or exploring the intersection 
              of design and development. I believe in continuous growth and pushing the boundaries of what's possible on the web.
            </p>
          </div>

          <div className='space-y-4 pt-2'>
            <h3 className='text-xl font-bold text-gray-900'>Core Values</h3>
            <ul className='space-y-3'>
              {[
                'Clean, readable, and maintainable code',
                'User-first design philosophy',
                'Continuous learning and growth',
                'Collaboration and communication',
                'Attention to detail and quality'
              ].map((value, i) => (
                <li key={i} className='flex items-start gap-3'>
                  <span className='text-blue-600 font-bold text-lg mt-1'>✓</span>
                  <span className='text-gray-700'>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex gap-4 pt-4'>
            <Button variant='glass-light' size='md'>
              📥 Download CV
            </Button>
            <Button variant='glass-dark' size='md'>
              💬 Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 space-y-12'>
        <div className='space-y-3 text-center'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>Skills & Expertise</h2>
          <p className='text-gray-600 text-lg'>Technologies and tools I'm proficient in</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {skills.map((skill, index) => (
            <div 
              key={index}
              className='bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300'
            >
              <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                <span className='w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full'></span>
                {skill.category}
              </h3>
              <ul className='space-y-3'>
                {skill.items.map((item, i) => (
                  <li key={i} className='flex items-center gap-3'>
                    <span className='text-blue-500'>▸</span>
                    <span className='text-gray-700 font-medium'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 space-y-12'>
        <div className='text-center space-y-3'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>My Journey</h2>
          <p className='text-gray-600 text-lg'>Key milestones in my development career</p>
        </div>

        <div className='space-y-8 max-w-3xl mx-auto'>
          {timeline.map((milestone, i) => (
            <div key={i} className='flex gap-6 items-start group'>
              <div className='flex-shrink-0'>
                <div className='flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300'>
                  {i + 1}
                </div>
              </div>
              <div className='pt-1 flex-1 pb-8 border-l-2 border-gray-200 group-last:border-transparent pl-6 group-hover:border-blue-300 transition-colors'>
                <p className='text-sm font-semibold text-blue-600 uppercase'>{milestone.year}</p>
                <h4 className='text-2xl font-bold text-gray-900 mt-1'>{milestone.title}</h4>
                <p className='text-gray-600 mt-2 leading-relaxed'>{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 space-y-12'>
        <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>Education</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300'>
            <div className='flex items-start gap-4'>
              <div className='text-4xl'></div>
              <div className='flex-1'>
                <h3 className='text-xl font-bold text-gray-900'>Information Technology</h3>
                <p className='text-blue-600 font-semibold text-sm mt-1'>National University • 2024 - Present</p>
                <p className='text-gray-600 text-sm mt-3'>Specializing in software development with focus on web technologies and full-stack applications.</p>
              </div>
              <div className='flex-1'>
                <h3 className='text-xl font-bold text-gray-900'>Information Technology</h3>
                <p className='text-blue-600 font-semibold text-sm mt-1'>San Sebastian College • 2022 - 2024</p>
                <p className='text-gray-600 text-sm mt-3'>Specializing in software development with focus on web technologies and full-stack applications.</p>
              </div>
            </div>
          </div>

          <div className='bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300'>
            <div className='flex items-start gap-4'>
              <div className='text-4xl'></div>
              <div className='flex-1'>
                <h3 className='text-xl font-bold text-gray-900'>Web Development Bootcamp</h3>
                <p className='text-blue-600 font-semibold text-sm mt-1'>Online Course • 2023</p>
                <p className='text-gray-600 text-sm mt-3'>Intensive training in React, Node.js, and modern web development practices with hands-on projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 py-16'>
        <div className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 lg:p-16 text-center space-y-8 shadow-2xl'>
          <h2 className='text-4xl lg:text-5xl font-bold text-white'>
            Let's Collaborate!
          </h2>
          <p className='text-white/90 text-lg max-w-2xl mx-auto'>
            I'm always open to new opportunities and interesting conversations. Let's work together to create something amazing!
          </p>
          <div className='flex flex-wrap justify-center gap-4 pt-4'>
            <Link to='/'>
              <Button variant='glass-white' size='lg'>
                View My Work
              </Button>
            </Link>
            <Button variant='glass-white' size='lg'>
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage