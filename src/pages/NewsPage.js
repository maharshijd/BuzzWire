import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner.js';
import NewsCard from '../components/NewsCard.js';


const NewsPage = ({ apiUrl, title }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.results || []);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-blue-500 pb-2">{title}</h1>
      {loading && <LoadingSpinner />}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <NewsCard key={article.article_id || index} article={article} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No articles found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsPage;