import Button from './Button'

const ArticleList = ({ articles, onArticleClick }) => {
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
    <div className='space-y-24'>
      {/* FEATURED ARTICLE */}
      {articles.length > 0 && (
        <section>
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
              <Button variant='glass-light' size='lg' className='mt-4' onClick={() => onArticleClick && onArticleClick(articles[0].id)}>
                Read Full Article →
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* ARTICLES GRID */}
      {articles.length > 1 && (
        <section className='space-y-12'>
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
                  <div className='absolute top-3 left-3'>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border inline-block ${getCategoryStyles(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className='p-6 flex flex-col flex-grow'>
                  <h3 className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2'>
                    {article.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3'>
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className='flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-4 mb-4'>
                    <span>📅 {article.date}</span>
                    <span>⏱️ {article.readTime}</span>
                  </div>

                  {/* Read More Button */}
                  <Button 
                    variant='glass-light' 
                    size='sm' 
                    className='w-full'
                    onClick={() => onArticleClick && onArticleClick(article.id)}
                  >
                    Read More →
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default ArticleList
