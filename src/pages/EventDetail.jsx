import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../context/UserContext";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch event details
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/expos/${id}`)
      .then((res) => setEvent(res.data))
      .catch((err) => console.error("Error fetching event:", err));
  }, [id]);

  const handleRegister = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!event?._id) {
      toast.error("Expo ID is missing. Cannot register.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/expos/attendeeregister", {
        expoId: event._id,
        username: user.username,
        email: user.email,
      });

      if (res.data.status) {
        toast.success(res.data.message);
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
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Event Image */}
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-72 object-cover"
        />

        {/* Event Details */}
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>
          <p className="text-gray-600">
            📍 {event.location} | 🗓 {new Date(event.date).toLocaleDateString()} | ⏰ {event.time}
          </p>
          <p className="text-lg text-gray-700">{event.description}</p>
          <p className="text-gray-600">🎤 Speaker: {event.speaker}</p>
          <p className="text-gray-600">🎨 Theme: {event.theme}</p>
          <p className="text-gray-600">🏢 Booths: {event.booths}</p>

          {/* Attendee List */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">👥 Attendees</h2>
            {event.attendeeList?.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700">
                {event.attendeeList.map((att) => (
                  <li key={att._id}>
                    {att.username} ({att.email})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No attendees registered yet.</p>
            )}
          </div>

          {/* Exhibitor List */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">🏬 Exhibitors</h2>
            {event.exhibitorList?.length > 0 ? (
              <ul className="space-y-2">
                {event.exhibitorList.map((ex) => (
                  <li
                    key={ex._id}
                    className="p-3 border rounded bg-gray-50 shadow-sm"
                  >
                    <p className="font-medium">{ex.companyName}</p>
                    <p className="text-sm text-gray-600">{ex.username} ({ex.email})</p>
                    <p className="text-sm">Products/Services: {ex.productsServices}</p>
                    <p className="text-sm">Documents: {ex.documents}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No exhibitors yet.</p>
            )}
          </div>

          {/* Register Button */}
          <div className="mt-6">
            <button
              onClick={handleRegister}
              disabled={loading}
              className={`px-6 py-3 rounded-lg text-white font-medium shadow-md transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Registering..." : "Register for Expo"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
