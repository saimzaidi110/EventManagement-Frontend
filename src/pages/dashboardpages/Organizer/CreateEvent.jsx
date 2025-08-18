import React, { useState } from "react";
import { apiurl } from "../../../api";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    theme: "",
    themeColor: "#0a74da", // new color picker
    imageUrl: "",
    booths: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0]; // min date for today

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const payload = {
      ...formData,
      booths: Number(formData.booths),
      date: new Date(formData.date).toISOString(),
    };

    try {
      const response = await fetch(apiurl + "/api/expos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ " + result.message);
        setFormData({
          title: "",
          date: "",
          location: "",
          description: "",
          theme: "",
          themeColor: "#0a74da",
          imageUrl: "",
          booths: "",
        });
      } else {
        setError("❌ " + result.message);
      }
    } catch (err) {
      setError("❌ Failed to connect to the server.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Expo Event</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="title"
          placeholder="Expo Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />

        {/* Date picker with restriction */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={today}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="theme"
          placeholder="Theme"
          value={formData.theme}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />

        {/* Theme Color Picker */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">
            Theme Color
          </label>
          <input
            type="color"
            name="themeColor"
            value={formData.themeColor}
            onChange={handleChange}
            className="w-16 h-10 cursor-pointer border rounded"
          />
        </div>

        {/* Image URL with pattern */}
        <div>
          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL (https://example.com/image.jpg)"
            value={formData.imageUrl}
            onChange={handleChange}
            pattern="https?://.*\.(jpg|jpeg|png|gif|webp)$"
            title="Please enter a valid image URL (jpg, jpeg, png, gif, webp)"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 w-full"
          />

          {/* Preview if URL is valid */}
          {formData.imageUrl && (
            <div className="mt-3">
              <img
                src={formData.imageUrl}
                alt="Preview"
                className="w-full max-h-60 object-cover rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {/* Booths with min=0 */}
        <input
          type="number"
          name="booths"
          placeholder="Number of Booths"
          value={formData.booths}
          onChange={handleChange}
          min="0"
          required
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Create Expo
        </button>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default CreateEvent;
