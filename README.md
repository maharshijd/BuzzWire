BuzzWire: A Modern React News Application
BuzzWire is a sleek, responsive, and user-friendly news aggregator built with React and styled with Tailwind CSS. It provides users with the latest articles across various categories, including trending topics, sports, international affairs, and financial markets, all presented in a clean and intuitive interface.

✨ Features
User Authentication: A dedicated login page to manage user access.

Dynamic Homepage: A central landing page that directs users to various news sections.

Categorized News Feeds: Separate, dedicated pages for different news categories :

🔥 Trending: Catch up on the most popular news stories of the moment.

🌍 International: Stay informed about global events and world affairs.

⚽ Sports: Get the latest scores, highlights, and sports news.

📈 Markets: Track financial news, stock market updates, and economic trends.

Dynamic Themed Banners: Each news category is presented with a unique and visually appealing banner to enhance the user experience.

Responsive Design: The application is fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices.

Asynchronous Data Fetching: Articles are fetched from a live news API, with elegant loading and error states to keep the user informed.

🛠️ Tech Stack
Frontend: React.js

Styling: Tailwind CSS

API: Fetches data from a third-party news API (e.g., NewsAPI, GNews, etc.)

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and npm installed on your machine.

npm

npm install npm@latest -g


Installation
Clone the repository:

git clone [https://github.com/maharshijd/buzzwire.git](https://github.com/maharshijd/BuzzWire.git)


Navigate to the project directory:

cd buzzwire


Install NPM packages:

npm install


Start the development server:

npm start


The application will open automatically at http://localhost:3000.

📂 Project Structure
The project follows a standard React application structure, separating concerns for better maintainability.

buzzwire/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── LoadingSpinner.jsx
│   │   ├── NewsCard.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── NewsPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md


📄 License
Distributed under the MIT License. See LICENSE for more information.
