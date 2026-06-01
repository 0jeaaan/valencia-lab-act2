import { useContext } from 'react';
import { ArticlesContext } from '../context/articlesContext';

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within ArticlesProvider');
  }
  return context;
};
