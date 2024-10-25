"use client";
import api from '@/lib/axios';
import { useEffect, useState } from 'react';
import { SensorReading } from "@/types/index";

interface MyComponentProps {
  machineId: number;
}

// const MyComponent: React.FC = () => {

const MyComponent: React.FC<MyComponentProps> = ({ machineId }) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoadingSensorData, setIsLoadingSensorData] = useState(false);
  const [sensorData, setSensorData] = useState<SensorReading[]>([]);

  // Ensure to replace this with the actual machine ID you want to fetch
  // const machineId = 5; // Example machine ID, replace with actual ID as needed

  const fetchSensorData = async (machineId: number) => {
    setIsLoadingSensorData(true);
    try {
      const response = await api.get(`/api/sensor-readings?machine_id=${machineId}`);
      setSensorData(response.data.data);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
      setSensorData([]);
    } finally {
      setIsLoadingSensorData(false);
    }
  };

  const renderSensorData = (reading: SensorReading) => {
    const sensorData = JSON.parse(reading.sensor_data);
    return (
      <div key={reading.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
        <p><strong>Reading Time:</strong> {new Date(reading.reading_time).toLocaleString()}</p>
        {Object.entries(sensorData).map(([key, value]) => (
          <p key={key}><strong>{key.replace(/_/g, ' ')}:</strong> {JSON.stringify(value)}</p>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const fetchDataInterval = async () => {
      try {
        console.log('Fetching data...'); // Log each fetch
        await fetchSensorData(machineId); // Pass the machineId
      } catch (err) {
        setError('Error fetching data');
      }
    };

    fetchDataInterval(); // Fetch data immediately on mount

    const intervalId = setInterval(fetchDataInterval, 20000); // 20 seconds

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, [machineId]); // Add machineId to dependency array if it can change

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoadingSensorData ? (
        <p>Loading...</p>
      ) : (
        sensorData.map(renderSensorData)
      )}
    </div>
  );
};

export default MyComponent;
