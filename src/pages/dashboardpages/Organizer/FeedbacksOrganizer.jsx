import React, { useEffect, useState } from "react";
import axios from "axios";


export default function FeedbackOrganizer() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/contact");
        if (res.data.success) {
          setFeedbacks(res.data.data);
        }
      } catch (err) {
        setError("❌ Failed to fetch feedbacks");
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
     
      <section className="py-10 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            📋 Feedback Organizer
          </h2>

          {loading ? (
            <p className="text-center text-gray-600">Loading feedbacks...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : feedbacks.length === 0 ? (
            <p className="text-center text-gray-600">No feedbacks found</p>
          ) : (
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full table-auto">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Phone</th>
                    <th className="px-4 py-3 text-left">Company</th>
                    <th className="px-4 py-3 text-left">Message</th>
                    <th className="px-4 py-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map((fb) => (
                    <tr
                      key={fb._id}
                      className="border-b hover:bg-gray-100 transition"
                    >
                      <td className="px-4 py-3">{fb.name}</td>
                      <td className="px-4 py-3">{fb.email}</td>
                      <td className="px-4 py-3">{fb.phone || "-"}</td>
                      <td className="px-4 py-3">{fb.company || "-"}</td>
                      <td className="px-4 py-3">{fb.message}</td>
                      <td className="px-4 py-3">
                        {new Date(fb.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
          
    </div>
  );
}
