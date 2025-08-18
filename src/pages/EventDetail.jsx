import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../context/UserContext";
import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";

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
    <>
      <NavbarComponent />
      <div className="min-h-screen bg-gray-100 p-6 pt-[100px]">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Event Image */}
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-80 object-cover"
          />

          {/* Event Details */}
          <div className="p-8 space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-800">{event.title}</h1>
            <p className="text-gray-600 text-lg">
              📍 {event.location} | 🗓 {new Date(event.date).toLocaleDateString()} | ⏰ {event.time}
            </p>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <p>🎤 <span className="font-semibold">Speaker:</span> {event.speaker}</p>
              <p>🎨 <span className="font-semibold">Theme:</span> {event.theme}</p>
              <p>🏢 <span className="font-semibold">Booths:</span> {event.booths}</p>
            </div>

            {/* Attendee List */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">👥 Attendees</h2>
              {event.attendeeList?.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left text-gray-600">#</th>
                        <th className="px-4 py-2 text-left text-gray-600">Username</th>
                        <th className="px-4 py-2 text-left text-gray-600">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {event.attendeeList.map((att, index) => (
                        <tr key={att._id} className="hover:bg-gray-50">
                          <td className="px-4 py-2">{index + 1}</td>
                          <td className="px-4 py-2">{att.username}</td>
                          <td className="px-4 py-2">{att.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">No attendees registered yet.</p>
              )}
            </div>

            {/* Exhibitor List */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">🏬 Exhibitors</h2>
              {event.exhibitorList?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.exhibitorList.map((ex) => (
                    <div
                      key={ex._id}
                      className="p-5 border rounded-xl bg-gray-50 shadow hover:shadow-md transition"
                    >
                      <p className="text-lg font-semibold">{ex.companyName}</p>
                      <p className="text-sm text-gray-600">
                        {ex.username} ({ex.email})
                      </p>
                      <p className="text-sm mt-2">
                        <span className="font-medium">Products/Services:</span> {ex.productsServices}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Documents:</span> {ex.documents}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No exhibitors yet.</p>
              )}
            </div>

            {/* Register Button */}
            <div className="mt-6">
              <button
                onClick={handleRegister}
                disabled={loading}
                className={`w-full md:w-auto px-8 py-3 rounded-xl text-white font-semibold shadow-md transition ${
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
      <FooterComponent />
    </>
  );
}
