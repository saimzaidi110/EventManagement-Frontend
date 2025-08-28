import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FeedbackList({ eventId }) {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/feedbacks/event/${eventId}`);
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [eventId]);

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">User Feedback</h2>
      {feedbacks.length > 0 ? (
        <ul className="space-y-4">
          {feedbacks.map((fb) => (
            <li key={fb._id} className="border p-3 rounded-lg bg-gray-50">
              <p className="font-medium">{fb.userId?.username || "Anonymous"}</p>
              <p className="text-sm text-gray-600">⭐ {fb.rating}/5</p>
              <p className="mt-2">{fb.comment}</p>
              <p className="mt-2">{fb.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No feedback yet.</p>
      )}
    </div>
  );
}
