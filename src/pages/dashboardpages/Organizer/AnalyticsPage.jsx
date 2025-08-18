import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function AnalyticsPage() {
  const [expoData, setExpoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/expos")
      .then((response) => {
        setExpoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching expo data", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-700 animate-pulse">
          Loading Analytics...
        </h2>
      </div>
    );
  }

  // Prepare datasets
  const eventTitles = expoData.map((event) => event.title);
  const attendeeCounts = expoData.map((event) => event.attendeeList?.length || 0);
  const exhibitorCounts = expoData.map((event) => event.exhibitorList?.length || 0);
  const boothCounts = expoData.map((event) => event.booths || 0);

  // Dynamic colors for exhibitors
  const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(`hsl(${(i * 50) % 360}, 70%, 55%)`);
    }
    return colors;
  };

  // Attendee Engagement (Horizontal Bar Chart)
  const attendeeChart = {
    labels: eventTitles,
    datasets: [
      {
        label: "Attendees",
        data: attendeeCounts,
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
    ],
  };
  const attendeeOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Attendee Engagement",
        font: { size: 22, weight: "bold" },
      },
    },
    scales: {
      x: { grid: { color: "#f3f4f6" } },
      y: { grid: { display: false } },
    },
  };

  // Booth Traffic (Horizontal Bar Chart)
  const boothChart = {
    labels: eventTitles,
    datasets: [
      {
        label: "Booth Count",
        data: boothCounts,
        backgroundColor: "rgba(239, 68, 68, 0.7)",
      },
    ],
  };
  const boothOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Booth Traffic",
        font: { size: 22, weight: "bold" },
      },
    },
    scales: {
      x: { grid: { color: "#f3f4f6" } },
      y: { grid: { display: false } },
    },
  };

  // Exhibitor Distribution (Pie Chart with dynamic colors)
  const exhibitorChart = {
    labels: eventTitles,
    datasets: [
      {
        label: "Exhibitors",
        data: exhibitorCounts,
        backgroundColor: generateColors(eventTitles.length),
      },
    ],
  };
  const exhibitorOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      title: {
        display: true,
        text: "Exhibitor Distribution",
        font: { size: 22, weight: "bold" },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-800">
        Expo Analytics Dashboard
      </h1>

      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        {/* Attendee Engagement */}
        <div className="bg-white w-full p-8 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300">
          <div className="h-[450px]">
            <Bar data={attendeeChart} options={attendeeOptions} />
          </div>
        </div>

        {/* Booth Traffic */}
        <div className="bg-white w-full p-8 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300">
          <div className="h-[450px]">
            <Bar data={boothChart} options={boothOptions} />
          </div>
        </div>

        {/* Exhibitor Distribution */}
        <div className="bg-white w-full p-8 rounded-3xl shadow-2xl hover:shadow-xl transition-shadow duration-300">
          <div className="h-[450px] flex justify-center items-center">
            <Pie data={exhibitorChart} options={exhibitorOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;
