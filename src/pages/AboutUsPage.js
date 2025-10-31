import React from 'react';


const AboutUsPage = () => {
    const developers = [
        { name: "Maharshi Dindoliwala" },
        { name: "Rudra Patel" },
        { name: "Mishti Kinker" },
        { name: "Nilesh Sethi" }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About BUZZ WIRE</h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    BUZZ WIRE is your premier destination for the latest news and updates from across the globe. Our mission is to provide timely, unbiased, and comprehensive news coverage, keeping you informed on the topics that matter most. From breaking national stories to in-depth international analysis, sports highlights, and market trends, we bring the world to your fingertips.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    We believe in the power of information to connect and empower communities. Our platform is designed for a seamless and engaging user experience, ensuring you can access reliable news anytime, anywhere.
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center border-t pt-8">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {developers.map(dev => (
                        <div key={dev.name} className="p-4">
                            <img 
                                src={`https://placehold.co/150x150/667EEA/FFFFFF?text=${dev.name.charAt(0)}`}
                                alt={dev.name}
                                className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
                            />
                            <h3 className="font-bold text-xl text-gray-800">{dev.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;