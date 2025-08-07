import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { apiurl } from '../api';

export default function Productpages() {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: ''
  });


  const getproducts = async () => {
    try {
      const response = await axios.get(apiurl+'/products');
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((p) => p._id === id);
    setEditProductId(id);
    setEditFormData({
      name: productToEdit.name,
      description: productToEdit.description || '',
      price: productToEdit.price,
      category: productToEdit.category,
      stock: productToEdit.stock,
      image: productToEdit.image || ''
    });
  };


  const handleInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(apiurl+`/products/${editProductId}`, {
        name: editFormData.name,
        description: editFormData.description,
        price: parseFloat(editFormData.price),
        category: editFormData.category,
        stock: parseInt(editFormData.stock),
        image: editFormData.image
      });

      if (response.data.status) {
        toast.success(response.data.message || 'Product updated');
        setEditProductId(null);
        getproducts();
      } else {
        toast.error(response.data.message || 'Update failed');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to update product');
    }
  };

  const handleCancel = () => {
    setEditProductId(null);
    setEditFormData({
      name: '',
      price: '',
      category: '',
      image: ''
    });
  };

const handleDelete = async (id) => {
  try {
    const res = await axios.delete(apiurl+`/products/${id}`);

    if (res.data.status) {
      toast.success(res.data.message || 'Product deleted successfully');
      getproducts(); // Refresh list
    } else {
      toast.error(res.data.message || 'Failed to delete product');
    }
  } catch (error) {
    console.error(error);
    toast.error('Error deleting product');
  }
};


  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      {products.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 border-b">ID</th>
              <th className="py-2 border-b">Image</th>
              <th className="py-2 border-b">Name</th>
              <th className="py-2 border-b">Price</th>
              <th className="py-2 border-b">Category</th>
              <th className="py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="px-4 py-2 border-b">{product._id.slice(0, 6)}...</td>

                <td className="px-4 py-2 border-b">
                  {editProductId === product._id ? (
                    <div>
                      <input
                        name="image"
                        value={editFormData.image}
                        onChange={handleInputChange}
                        className="border px-2 py-1 mb-2 w-full"
                        placeholder="Image URL"
                      />
                      {editFormData.image && (
                        <img
                          src={editFormData.image}
                          alt="Preview"
                          className="h-12 w-12 object-cover rounded"
                        />
                      )}
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-12 w-12 object-cover rounded"
                    />
                  )}
                </td>

                <td className="px-4 py-2 border-b">
                  {editProductId === product._id ? (
                    <input
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                      className="border px-2 py-1"
                    />
                  ) : (
                    product.name
                  )}
                </td>

                <td className="px-4 py-2 border-b">
                  {editProductId === product._id ? (
                    <input
                      name="price"
                      type="number"
                      value={editFormData.price}
                      onChange={handleInputChange}
                      className="border px-2 py-1"
                    />
                  ) : (
                    `$${product.price}`
                  )}
                </td>

                <td className="px-4 py-2 border-b">
                  {editProductId === product._id ? (
                    <input
                      name="category"
                      value={editFormData.category}
                      onChange={handleInputChange}
                      className="border px-2 py-1"
                    />
                  ) : (
                    product.category
                  )}
                </td>

                <td className="px-4 py-2 border-b">
                  {editProductId === product._id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(product._id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="text-2xl font-bold mb-4">No product Found</h2>
      )}
    </div>
  );
}
