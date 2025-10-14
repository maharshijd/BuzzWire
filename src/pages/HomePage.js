import React, { useState, useEffect, useRef } from 'react';
import NewsPage from './NewsPage';
import bgImage from '../assets/bgimg1.png';


const HomePage = () => {
    const [breakingNews, setBreakingNews] = useState([]);
    const [tickerIndex, setTickerIndex] = useState(0);
    const trendingSectionRef = useRef(null);

    const handleStartExploringClick = () => {
        trendingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchBreakingNews = async () => {
            try {
                const response = await fetch("https://newsdata.io/api/1/latest?apikey=pub_8b630121f57443c093e4762fd3d6b3e6&q=breaking%20news&language=en&country=in");
                const data = await response.json();
                setBreakingNews(data.results || []);
            } catch (error) {
                console.error("Failed to fetch breaking news:", error);
            }
        };
        fetchBreakingNews();
    }, []);

    useEffect(() => {
        if (breakingNews.length > 0) {
            const timer = setInterval(() => {
                setTickerIndex(prevIndex => (prevIndex + 1) % breakingNews.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [breakingNews]);

    return (
        <div>
            {}
            <div className="text-gray-800 text-center py-20 md:py-32" style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh'}}>
                <div className="container mx-auto px-4" style={{backgroundColor: 'transparent', borderRadius: '1rem', padding: '2rem'}}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Smart Destination for Global News</h1>
                    <p className="text-lg md:text-xl mb-8">Stay informed with real-time updates from around the world, all in one hub.</p>
                    <button 
                        onClick={handleStartExploringClick}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                        Start Exploring
                    </button>
                </div>
            </div>

            {}
            {breakingNews.length > 0 && (
                <div className="bg-red-600 text-white flex items-center p-3">
                    <span className="font-bold text-lg mr-4 flex-shrink-0 px-4">Breaking News:</span>
                    <div className="overflow-hidden h-6">
                         <div className="whitespace-nowrap transition-transform duration-500" style={{ transform: `translateY(-${tickerIndex * 1.5}rem)` }}>
                             {breakingNews.map((news, index) => (
                                <a href={news.link} target="_blank" rel="noopener noreferrer" key={news.article_id || index} className="block h-6 leading-6 hover:underline">
                                    {news.title}
                                 </a>
                             ))}
                         </div>
                    </div>
                </div>
            )}
             
            {}
            <div ref={trendingSectionRef} className="py-10">
                 <NewsPage apiUrl="https://newsdata.io/api/1/latest?apikey=pub_8b630121f57443c093e4762fd3d6b3e6&country=in&language=en" title="Trending News"/>
            </div>
        </div>
    );
};

export default HomePage;