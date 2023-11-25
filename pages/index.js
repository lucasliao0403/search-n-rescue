import { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import styles from '/styles/Home.module.css';
import 'typeface-inter';

const socket = io('https://94de-129-100-255-61.ngrok-free.app'); // Replace with your Ngrok URL

export default function Home() {
  const [detectedObjects, setDetectedObjects] = useState([]);

  const enterImage = async () => {
    try {
      // Fetch data from the server
      const response = await axios.get("http://localhost:3001/data"); // Replace with your backend server URL and route

      // Update the state with the fetched data
      setDetectedObjects(response.data);
    } catch (error) {
      console.warn("Error:", error.message);
    }
  };

  useEffect(() => {
    // Call enterImage immediately when the component mounts
    enterImage();

    // Set up an interval to call enterImage every 5 seconds
    const intervalId = setInterval(() => {
      enterImage();
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Listen for objectDetected event from the server
    socket.on('objectDetected', (data) => {
      console.log('Object detected:', data);

      // Update the state to display information on the frontend
      setDetectedObjects((prevObjects) => [...prevObjects, data]);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('objectDetected');
    };
  }, []);

  return (
    <div>      
      {/* Remove the button since enterImage is called automatically */}
      <div className={styles.dashboardContent}>
        <div className={styles.cardContainer}>
          {detectedObjects.map((object, index) => (
            <div key={index} className={styles.detectedObject}>
              <p>Class Name: {object.className}</p>
              <p>Confidence: {object.confidence}%</p>
              <p>Coordinates: lat: {object.location.lat}, long: {object.location.long}</p>
              <p>Time: {object.time}</p>
              <img
                src={`data:image/jpeg;base64, ${object.image}`}
                alt={`Detected Object ${index}`}
              />
              {/* Add other information you want to display */}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
