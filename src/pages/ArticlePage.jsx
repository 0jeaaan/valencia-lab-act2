import Button from '../components/Button'

const ArticlePage = () => {
  const articles = [
    {
      id: 1,
      title: 'Building a React App from Scratch',
      excerpt: 'A comprehensive guide to setting up a modern React application with Vite, Tailwind CSS, and best practices.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      date: 'March 20, 2024',
      category: 'React',
      readTime: '8 min read',
      color: 'blue'
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'Dive deep into utility-first CSS and learn how to build stunning, responsive designs efficiently.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
      date: 'March 15, 2024',
      category: 'CSS',
      readTime: '10 min read',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Full-Stack Development with Node.js',
      excerpt: 'Building scalable backend services with Node.js, Express, and MongoDB for production applications.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      date: 'March 10, 2024',
      category: 'Backend',
      readTime: '12 min read',
      color: 'green'
    },
    {
      id: 4,
      title: 'Web Performance Optimization Tips',
      excerpt: 'Essential techniques to make your web applications faster, more efficient, and better for users.',
      image: 'https://images.unsplash.com/photo-1560264357-8d9766b48a58?w=600&h=400&fit=crop',
      date: 'March 5, 2024',
      category: 'Performance',
      readTime: '9 min read',
      color: 'orange'
    },
    {
      id: 5,
      title: 'Git Workflow Best Practices',
      excerpt: 'Master version control with Git and establish a solid workflow for team collaboration.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      date: 'February 28, 2024',
      category: 'Git',
      readTime: '7 min read',
      color: 'pink'
    },
    {
      id: 6,
      title: 'Responsive Design Fundamentals',
      excerpt: 'Everything you need to know about creating seamless, accessible experiences across all devices.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      date: 'February 20, 2024',
      category: 'Design',
      readTime: '8 min read',
      color: 'indigo'
    },
  ]

  const getCategoryStyles = (category) => {
    const styles = {
      React: 'bg-blue-100 text-blue-700 border-blue-200',
      CSS: 'bg-purple-100 text-purple-700 border-purple-200',
      Backend: 'bg-green-100 text-green-700 border-green-200',
      Performance: 'bg-orange-100 text-orange-700 border-orange-200',
      Git: 'bg-pink-100 text-pink-700 border-pink-200',
      Design: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    }
    return styles[category] || 'bg-gray-100 text-gray-700 border-gray-200'
  }

  return (
    <div className='space-y-24 pb-32'>
      {/* HEADER */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 pt-24 space-y-6'>
        <div>

        </div>
        <div>
          <h1 className='text-5xl lg:text-6xl font-bold text-gray-900'>
            Articles & Tutorials
          </h1>
          <p className='text-xl text-gray-600 mt-4 max-w-2xl'>
            Sharing knowledge on web development, design, and best practices. Read my latest articles and tutorials.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 p-8 lg:p-12'>
          {/* Featured Image */}
          <div className='relative w-full h-64 lg:h-80 overflow-hidden rounded-2xl bg-gray-100'>
            <img 
              src={articles[0].image}
              alt={articles[0].title}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
            />
            <div className='absolute top-4 left-4'>
              <span className={`text-xs font-bold px-4 py-2 rounded-full border ${getCategoryStyles(articles[0].category)}`}>
                ⭐ FEATURED
              </span>
            </div>
          </div>

          {/* Featured Content */}
          <div className='space-y-5'>
            <div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full border inline-block ${getCategoryStyles(articles[0].category)}`}>
                {articles[0].category}
              </span>
            </div>
            <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>
              {articles[0].title}
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed'>
              {articles[0].excerpt}
            </p>
            <div className='flex items-center gap-4 text-sm text-gray-500 pt-2'>
              <span>📅 {articles[0].date}</span>
              <span>⏱️ {articles[0].readTime}</span>
            </div>
            <Button variant='primary' size='lg' className='mt-4'>
              Read Full Article →
            </Button>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 space-y-12'>
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>Latest Articles</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className='group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full'
            >
              {/* Article Image */}
              <div className='relative w-full h-48 overflow-hidden bg-gray-100'>
                <img 
                  src={article.image}
                  alt={article.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>

              {/* Content */}
              <div className='p-6 space-y-4 flex-1 flex flex-col'>
                <div className='flex items-center justify-between'>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${getCategoryStyles(article.category)}`}>
                    {article.category}
                  </span>
                  <span className='text-xs text-gray-500 font-medium'>{article.readTime}</span>
                </div>

                <h3 className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2'>
                  {article.title}
                </h3>

                <p className='text-gray-600 text-sm leading-relaxed flex-1 line-clamp-2'>
                  {article.excerpt}
                </p>

                <div className='flex items-center justify-between pt-2 border-t border-gray-100'>
                  <span className='text-xs text-gray-500'>{article.date}</span>
                  <Button variant='ghost' size='sm' className='text-blue-600 hover:text-blue-700'>
                    Read →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 space-y-10'>
        <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>Browse by Category</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {['React', 'CSS', 'Backend', 'Performance', 'Git', 'Design'].map((cat, i) => (
            <button 
              key={i}
              className={`py-3 px-4 rounded-xl font-semibold text-sm border transition-all duration-300 hover:shadow-lg hover:scale-105 ${getCategoryStyles(cat)}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 py-16'>
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 shadow-2xl'>
          <div className='max-w-2xl mx-auto text-center space-y-6'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white'>
              📬 Get New Articles in Your Inbox
            </h2>
            <p className='text-white/90 text-lg'>
              Subscribe to my newsletter for weekly articles on web development, design tips, and coding best practices.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 pt-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='your@email.com'
                className='flex-1 px-6 py-3 rounded-lg bg-white border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 font-medium'
              />
              <Button variant='primary' size='lg' className='bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700'>
                Subscribe
              </Button>
            </div>
            <p className='text-white/75 text-sm'>
              ✨ No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 py-12'>
        <div className='bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center space-y-6'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>
            Want to collaborate?
          </h2>
          <p className='text-gray-600 text-lg'>
            Have an interesting idea or want to discuss web development? Let's connect!
          </p>
          <div className='flex flex-wrap justify-center gap-4 pt-4'>
            <Button variant='primary' size='lg'>
              💬 Get in Touch
            </Button>
            <Button variant='outline' size='lg' className='border-blue-600 text-blue-600'>
              View My Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArticlePage