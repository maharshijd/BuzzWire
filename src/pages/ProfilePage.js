import React from 'react';

// Profile Page Component
const ProfilePage = ({ user, onLogout }) => {
    if (!user) {
        return (
            <div className="text-center py-20">
                <p>You are not logged in.</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100" style={{minHeight: 'calc(100vh - 140px)'}}>
            <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-xl shadow-lg text-center">
                <div className="mx-auto w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-5xl font-bold mb-4">
                    {user.name.charAt(0)}
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                
                <div className="border-t pt-6">
                     <button
                        onClick={onLogout}
                        className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md group hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;