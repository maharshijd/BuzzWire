import React, { useState, useEffect } from 'react';



const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
);

const NewsCard = ({ article }) => {
    if (!article || !article.title) return null;
    const placeholderImage = `https://placehold.co/600x400/EEE/31343C?text=News`;
    const imageUrl = article.image_url || placeholderImage;
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
                <img className="h-48 w-full object-cover" src={imageUrl} alt={article.title} onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }} />
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 h-20 overflow-hidden hover:text-blue-600">{article.title}</h3>
                    <p className="text-gray-600 text-sm h-24 overflow-hidden">{article.description?.substring(0, 120)}...</p>
                </div>
            </a>
        </div>
    );
};

const PageHeader = ({ title, subtitle, imageUrl }) => (
    <div className="relative text-white text-center py-20 bg-cover bg-center" style={{ backgroundImage: `url('${imageUrl}')` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
            <h1 className="text-5xl font-extrabold tracking-tight">{title}</h1>
            <p className="text-xl mt-2 font-light">{subtitle}</p>
        </div>
    </div>
);



const SportsNewsPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://newsdata.io/api/1/latest?apikey=pub_8b630121f57443c093e4762fd3d6b3e6&q=sports&country=in&language=en");
                const data = await response.json();
                if (data.status === "success" && Array.isArray(data.results)) {
                    setArticles(data.results);
                } else {
                    setError("Could not fetch sports news.");
                }
            } catch (err) {
                setError("An error occurred while fetching news.");
                console.error(err);
            }
            setLoading(false);
        };
        fetchNews();
    }, []);

    if (loading) return <LoadingSpinner />;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="bg-gray-100">
            <PageHeader 
                title="The Champion's Corner" 
                subtitle="Your Daily Dose of Sports Action" 
                imageUrl="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto-format&fit=crop" 
            />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => <NewsCard key={article.article_id || index} article={article} />)}
                </div>
            </div>
        </div>
    );
};

export default SportsNewsPage;