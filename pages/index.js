import { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('https://a3f1-129-100-255-61.ngrok-free.app'); // Replace with your server URL

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

  return (
    <div>
      <button onClick={enterImage}>Detect Objects</button>
      <div>
        {detectedObjects.map((object, index) => (
          <div key={index}>
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
    </div>
  );
}
