import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/expos/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.error("Error fetching event:", err));
  }, [id]);

  if (!event) {
    return <div className="p-6 text-center">Loading event details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold">{event.title}</h1>
          <p className="text-gray-500 mt-2">
            {new Date(event.date).toLocaleDateString()} — {event.location}
          </p>
          <p className="mt-4 text-lg">{event.description}</p>
          <p className="mt-2 text-gray-600">
            Theme: {event.theme} | Booths: {event.booths}
          </p>
        </div>
      </div>
    </div>
  );
}
