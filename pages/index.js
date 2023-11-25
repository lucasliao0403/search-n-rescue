import { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import styles from '/styles/Home.module.css'
import 'typeface-inter';

const socket = io('https://c53b-129-100-255-61.ngrok-free.app'); // Replace with your Ngrok URL

export default function Home() {
  const [detectedObjects, setDetectedObjects] = useState([]);

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

  async function enterImage() {
    try {
      // Fetch data from the server
      const response = await axios.get("http://localhost:3001/data"); // Replace with your backend server URL and route

      // Update the state with the fetched data
      setDetectedObjects(response.data);
    } catch (error) {
      console.warn("Error:", error.message);
    }
  }

  

  // useEffect()(
  //   fetchImages()
  // , [])

  return (
    <div className={styles.dashboardContent}>
      <button onClick={enterImage}>Detect Objects</button>
      <div className={styles.cardContainer}>
        {detectedObjects.map((object, index) => (
          <div key={index} className={styles.detectedObject}>
            <p>Class Name: {object.className}</p>
            <p>Confidence: {object.confidence}%</p>
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
      <h2>Welcome to the Dashboard</h2>
      <div className={styles.widget}>
        <h3>Widget 1</h3>
        <p>Content for Widget 1 goes here...</p>
      </div>
      <div className={styles.widget}>
        <h3>Widget 2</h3>
        <p>Content for Widget 2 goes here...</p>
      </div>
      <div className={styles.widget}>
        <h3>Widget 3</h3>
        <p>Content for Widget 3 goes here...</p>
      </div>
      {/* Add more widgets as needed */}
    </div>
    
  );
}
