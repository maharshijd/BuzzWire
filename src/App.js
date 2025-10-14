import React, { useState } from 'react';
import HomePage from './pages/HomePage.js';
import NewsPage from './pages/NewsPage.js';
import AboutUsPage from './pages/AboutUsPage.js';
import LoginPage from './pages/LoginPage.js';
import ProfilePage from './pages/ProfilePage.js';
import SportsNewsPage from './pages/SportsNewsPage.js';
import MareketNewsPage from './pages/MareketNewsPage.js';
import InternationalNewsPage from './pages/InternationalNewsPage.js';
// import NationalNewsPage from './pages/NationalNewsPage.js';
import NavLink from './components/NavLink.js';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    setCurrentPage('home'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage('home'); 
  };

  const apiKeys = {
    national: "https://newsdata.io/api/1/latest?apikey=pub_8b630121f57443c093e4762fd3d6b3e6&country=in&language=en",
    international: "https://newsdata.io/api/1/latest?apikey=pub_8b630121f57443c093e4762fd3d6b3e6&language=en",
    sports: "https://newsdata.io/api/1/latest?apikey=pub_8b630121f57443c093e4762fd3d6b3e6&q=sports&country=in&language=en",
    markets: "https://newsdata.io/api/1/latest?apikey=pub_8b630121f57443c093e4762fd3d6b3e6&q=crypto&language=en",
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'national':
        return <NewsPage apiUrl={apiKeys.national} title="National News" />;
      case 'international':
        return <InternationalNewsPage />;
      case 'sports':
        return <SportsNewsPage />;
      case 'markets':
        return <MareketNewsPage />;
      case 'about':
        return <AboutUsPage />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'profile':
        return <ProfilePage user={user} onLogout={handleLogout} />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-blue-600">
            BuzzWire
          </button>
          <div className="hidden md:flex items-center space-x-2">
            <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Home</NavLink>
            <NavLink page="international" currentPage={currentPage} setCurrentPage={setCurrentPage}>International</NavLink>
            <NavLink page="national" currentPage={currentPage} setCurrentPage={setCurrentPage}>National</NavLink>
            <NavLink page="sports" currentPage={currentPage} setCurrentPage={setCurrentPage}>Sports</NavLink>
            <NavLink page="markets" currentPage={currentPage} setCurrentPage={setCurrentPage}>Markets</NavLink>
            <NavLink page="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>About Us</NavLink>
          </div>
           <div className="flex items-center space-x-4">
              <svg className="w-6 h-6 text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              {isLoggedIn && user ? (
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setCurrentPage('profile')}
                    className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg hover:bg-blue-600 transition-colors"
                    title="View Profile"
                  >
                    {user.name.charAt(0)}
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setCurrentPage('login')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition duration-300">
                  Log In
                </button>
              )}
          </div>
        </nav>
      </header>
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <footer className="bg-gray-800 text-white">
          <div className="container mx-auto py-6 px-4 text-center">
              <p>&copy; {new Date().getFullYear()} BuzzWire. All Rights Reserved.</p>
              <p className="text-sm text-gray-400 mt-1">Your Trusted Source for News.</p>
          </div>
      </footer>
    </div>
  );
}