
// pages/create-article.tsx
import React from 'react';
import CreateArticle from './components/CreateArticle';

const createArticlePage: React.FC = () => {
  return (
    <div>
      <h1>Ecrire un article</h1>
      <CreateArticle />
    </div>
  );
};

export default createArticlePage;