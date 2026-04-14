import { useParams, useNavigate, Link } from 'react-router-dom'
import Button from '../components/Button'
import { articles } from '../assets/article-content'

const ArticlePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Find the current article
  const article = articles.find(a => a.id === parseInt(id))
  
  // Get related articles (exclude current)
  const relatedArticles = articles.filter(a => a.id !== parseInt(id)).slice(0, 3)

  if (!article) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center space-y-4'>
          <h1 className='text-4xl font-bold text-gray-900'>Article not found</h1>
          <p className='text-gray-600'>The article you're looking for doesn't exist.</p>
          <Button to='/articles' variant='primary' size='lg'>
            Back to Articles
          </Button>
        </div>
      </div>
    )
  }

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
      {/* HERO / HEADER */}
      <section className='max-w-4xl mx-auto px-6 lg:px-8 pt-24 space-y-6'>
        {/* Breadcrumb */}
        <div className='flex items-center gap-2 text-sm text-gray-600'>
          <Link to='/articles' className='hover:text-blue-600 transition-colors'>Articles</Link>
          <span>/</span>
          <span className='text-gray-900 font-medium'>{article.title}</span>
        </div>

        {/* Article Title */}
        <div className='space-y-4'>
          <div className='flex items-center gap-2'>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${getCategoryStyles(article.category)}`}>
              {article.category}
            </span>
          </div>
          <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
            {article.title}
          </h1>
        </div>

        {/* Article Meta */}
        <div className='flex flex-wrap items-center gap-6 text-gray-600 border-t border-b border-gray-200 py-4'>
          <div className='flex items-center gap-2'>
            <span>📅</span>
            <span>{article.date}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span>⏱️</span>
            <span>{article.readTime}</span>
          </div>
          <div className='ml-auto flex items-center gap-2 text-sm'>
            <span>Share:</span>
            <button className='text-gray-600 hover:text-blue-600 transition-colors'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7' /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className='max-w-5xl mx-auto px-6 lg:px-8'>
        <div className='relative w-full h-96 lg:h-[500px] overflow-hidden rounded-3xl bg-gray-100 shadow-2xl'>
          <img 
            src={article.image}
            alt={article.title}
            className='w-full h-full object-cover'
          />
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className='max-w-3xl mx-auto px-6 lg:px-8'>
        <div className='prose prose-lg max-w-none'>
          {article.content && article.content.map((paragraph, idx) => (
            <p key={idx} className='text-lg text-gray-700 leading-relaxed mb-8'>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ARTICLE EXCERPT IF NO CONTENT */}
      {(!article.content || article.content.length === 0) && (
        <section className='max-w-3xl mx-auto px-6 lg:px-8'>
          <div className='bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4'>
            <h2 className='text-2xl font-bold text-blue-900'>Article Excerpt</h2>
            <p className='text-lg text-blue-800 leading-relaxed'>
              {article.excerpt}
            </p>
          </div>
        </section>
      )}

      {/* AUTHOR BIO */}
      <section className='max-w-3xl mx-auto px-6 lg:px-8'>
        <div className='bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-3xl p-8 flex gap-6'>
          <div className='w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0'></div>
          <div className='space-y-2'>
            <h3 className='text-xl font-bold text-gray-900'>Jean Paula</h3>
            <p className='text-gray-600'>
              Full-stack developer passionate about building beautiful, functional web applications and sharing knowledge with the community.
            </p>
            <div className='flex gap-3 pt-2'>
              <a href='#' className='text-blue-600 hover:text-blue-700 text-sm font-medium'>Twitter</a>
              <a href='#' className='text-blue-600 hover:text-blue-700 text-sm font-medium'>GitHub</a>
              <a href='#' className='text-blue-600 hover:text-blue-700 text-sm font-medium'>LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className='max-w-5xl mx-auto px-6 lg:px-8 space-y-8'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900'>Related Articles</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {relatedArticles.map((relArticle) => (
              <Link
                key={relArticle.id}
                to={`/articles/${relArticle.id}`}
                className='group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300'
              >
                <div className='relative w-full h-40 overflow-hidden bg-gray-100'>
                  <img 
                    src={relArticle.image}
                    alt={relArticle.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                </div>
                <div className='p-4 space-y-2'>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border inline-block ${getCategoryStyles(relArticle.category)}`}>
                    {relArticle.category}
                  </span>
                  <h3 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2'>
                    {relArticle.title}
                  </h3>
                  <p className='text-xs text-gray-500'>
                    {relArticle.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section className='max-w-3xl mx-auto px-6 lg:px-8 py-12'>
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center space-y-6'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white'>
            Enjoyed this article?
          </h2>
          <p className='text-white/90 text-lg'>
            Share it with your network and subscribe for more articles like this.
          </p>
          <div className='flex flex-wrap justify-center gap-4 pt-4'>
            <Button variant='glass-white' size='lg'>
              � Subscribe
            </Button>
            <Button to='/articles' variant='glass-light' size='lg'>
              ← Back to Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArticlePage