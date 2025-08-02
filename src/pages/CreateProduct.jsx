import React, { useState } from "react";
import { FaBox, FaTag, FaDollarSign, FaWarehouse, FaImage, FaList } from "react-icons/fa";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setMessage({ type: "success", text: "✅ Product created successfully!" });
      setFormData({ name: "", description: "", price: "", category: "", stock: "", image: "" });
    } else {
      setMessage({ type: "error", text: result.error || "❌ Something went wrong" });
    }
  };

  const InputField = ({ icon, ...props }) => (
    <div className="relative">
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</span>
      <input
        {...props}
        className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🛒 Create New Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required icon={<FaBox />} />
          <div className="relative">
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InputField name="price" placeholder="Price" type="number" value={formData.price} onChange={handleChange} required icon={<FaDollarSign />} />
            <InputField name="stock" placeholder="Stock" type="number" value={formData.stock} onChange={handleChange} required icon={<FaWarehouse />} />
          </div>
          <InputField name="category" placeholder="Category" value={formData.category} onChange={handleChange} required icon={<FaTag />} />
          <InputField name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} icon={<FaImage />} />

          {formData.image && (
            <div className="mt-4 transition-all duration-300">
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-52 object-contain rounded-md border shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
          >
            Create Product
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-center font-semibold ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;
