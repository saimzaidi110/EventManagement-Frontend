import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function EventDetail() {
  const { id } = useParams(); // This is just for fetching the event
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Fetch event details
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/expos/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.error("Error fetching event:", err));
  }, [id]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate('/login')
      return;
    }

    if (!event?._id) {
      toast.error("Expo ID is missing. Cannot register.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/expos/attendeeregister",
        {
          expoId: event._id, // Always send the correct MongoDB ID
          username: user.username,
          email: user.email,
        }
      );
      console.log(res.data)

      if (res.data.status) {
        toast.success(res.data.message);
        setShowForm(false);
        setFormData({ name: "", email: "" });
      } else {
        toast.warning(res.data.message);
      }
    } catch (error) {
      console.error("Register Error:", error);
      toast.error(error.response?.data?.message || "Server error occurred");
    } finally {
      setLoading(false);
    }
  };

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

          {/* Register Button */}
          {!showForm && (
            <button
              onClick={handleSubmit}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Register for Expo
            </button>
          )}


        </div>
      </div>
    </div>
  );
}
