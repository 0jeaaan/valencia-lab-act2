import { useState, useCallback } from 'react';
import { ArticlesContext } from './articlesContext';
import { articles as defaultArticles } from '../assets/article-content';

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState(defaultArticles);

  const addArticle = useCallback((newArticle) => {
    const articleWithId = {
      ...newArticle,
      id: articles.length + 1,
      name: newArticle.name || newArticle.title.toLowerCase().replace(/\s+/g, '-'),
    };
    setArticles((prevArticles) => [...prevArticles, articleWithId]);
    return articleWithId;
  }, [articles.length]);

  const deleteArticle = useCallback((articleId) => {
    setArticles((prevArticles) =>
      prevArticles.filter((article) => article.id !== articleId)
    );
  }, []);

  const updateArticle = useCallback((articleId, updatedData) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === articleId ? { ...article, ...updatedData } : article
      )
    );
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, addArticle, deleteArticle, updateArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
};
