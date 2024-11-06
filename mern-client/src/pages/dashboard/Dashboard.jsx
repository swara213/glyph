import React from 'react';
import snoopy from "../../assets/admin_snoopy.jpg" ; 
const Dashboard = () => {
    const features = [
        {
            title: '1) Add Your Book',
            description: 'Description of feature 1. This feature allows users to...',
            icon: '📊', // You can replace this with an actual icon
        },
        {
            title: 'Feature 2',
            description: 'Description of feature 2. This feature helps users to...',
            icon: '🔍',
        },
        {
            title: 'Feature 3',
            description: 'Description of feature 3. This feature provides users with...',
            icon: '📅',
        },
    ];

    return (
        <div className="dashboard-container h-screen flex flex-col md:flex-row justify-center items-center p-4">
            <div className="flex-grow flex flex-col justify-center h-full">
                <h1 className="text-3xl font-bold mb-4 text-center">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                    <div className="feature-card h-full p-4 bg-[#DBC8A6] rounded-lg shadow-md flex flex-col justify-between">
                        <div className="feature-icon text-4xl mb-2">{features[0].icon}</div>
                        <h2 className="text-xl font-semibold">{features[0].title}</h2>
                        <p className="text-gray-600">{features[0].description}</p>
                    </div>
                    <div className="feature-card h-full p-4 bg-[#DBC8A6] rounded-lg shadow-md flex flex-col justify-between">
                        <div className="feature-icon text-4xl mb-2">{features[1].icon}</div>
                        <h2 className="text-xl font-semibold">{features[1].title}</h2>
                        <p className="text-gray-600">{features[1].description}</p>
                    </div>
                    <div className="col-span-1 md:col-span-2 flex justify-center">
                        <div className="feature-card w-full max-w-md h-full p-4 bg-[#DBC8A6] rounded-lg shadow-md flex flex-col justify-between">
                            <div className="feature-icon text-4xl mb-2">{features[2].icon}</div>
                            <h2 className="text-xl font-semibold">{features[2].title}</h2>
                            <p className="text-gray-600">{features[2].description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex md:w-1/3">
                <img
                    src={snoopy} 
                    alt=""
                    className="100% w-full object-cover" 
                />
            </div>
        </div>
    );
};

export default Dashboard;