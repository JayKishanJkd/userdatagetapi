import React, { useState, useEffect } from 'react';
import './profile.css'; // Make sure to adjust the path accordingly

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div className="profile-container">
      {userData ? (
        <div className="profile-content">
          <img
            className="profile-image"
            src={userData.picture.large}
            alt={`${userData.name.first} ${userData.name.last}`}
          />
          <div className="profile-info">
            <div className="user-name">
              <span> {userData.name.first}</span>
              <span> {userData.name.last}</span>
            </div> 
            <div className="user-data">
            <p>Gender: {userData.gender}</p>
            <p>Phone Number: {userData.phone}</p>
            </div>
            
            
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileScreen;
