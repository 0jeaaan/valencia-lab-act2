import { useNavigate } from 'react-router-dom'
import ArticleList from '../components/ArticleList'
import { articles } from '../assets/article-content'

const ArticleListPage = () => {
  const navigate = useNavigate()

  const handleArticleClick = (articleId) => {
    navigate(`/articles/${articleId}`)
  }

  return (
    <div className='space-y-24 pb-32'>
      {/* HEADER */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8 pt-24 space-y-6'>
        <div>
          {/* Breadcrumb or Badge */}
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

      {/* ARTICLES LIST COMPONENT */}
      <section className='max-w-7xl mx-auto px-6 lg:px-8'>
        <ArticleList 
          articles={articles} 
          onArticleClick={handleArticleClick}
        />
      </section>
    </div>
  )
}

export default ArticleListPage
