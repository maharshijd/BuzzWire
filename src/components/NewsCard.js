import React from 'react';

// News Card Component
const NewsCard = ({ article }) => {
  // Add a check to ensure article is not null or undefined
  if (!article) {
    // If article is not valid, render nothing to prevent a crash.
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col">
      <img 
        className="h-48 w-full object-cover" 
        src={article.image_url || 'https://placehold.co/600x400/E2E8F0/4A5568?text=News'} 
        alt={article.title}
        onError={(e) => { e.target.onerror = null; e.target.src='thumbNail.png'; }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{article.title}</h3>
        <p className="text-gray-600 text-base flex-grow">{article.description?.substring(0, 100)}...</p>
        <a 
          href={article.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 text-blue-500 hover:text-blue-700 font-semibold self-start"
        >
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

export default NewsCard;