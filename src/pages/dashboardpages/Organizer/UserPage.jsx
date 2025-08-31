




import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { apiurl } from '../../../api'
export default function UserPage() {
  const [users, setUsers] = useState([])
  const [editUserId, setEditUserId] = useState(null)
  const [editFormData, setEditFormData] = useState({
    username: '',
    email: '',
  })

  const getusers = async () => {
    try {
      const response = await axios.get(apiurl+'/users');
      setUsers(response.data.users)
    } catch (error) {
      console.error(error);
    }
  }

  const handleEdit = (id) => {
    const userToEdit = users.find(user => user._id === id)
    setEditUserId(id)
    setEditFormData({
      username: userToEdit.username,
      email: userToEdit.email,
    })
  }

  const handleInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = async () => {
    try {
      const response = await axios.put(apiurl+`/users/${editUserId}`, editFormData)
      const { status, message } = response.data
      if (status) {
        toast.success(message)
        setEditUserId(null)
        getusers()
      } else {
        toast.error(message)
      }
    } catch (error) {
      console.error(error)
      toast.error("Failed to update user.")
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(apiurl+`/users/${id}`);
      const { status, message } = response.data
      if (status) {
        toast.success(message)
        getusers()
      } else {
        toast.error(message)
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getusers();
  }, [])

  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        {users.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 border-b">ID</th>
                <th className="py-2 border-b">Name</th>
                <th className="py-2 border-b">Email</th>
                <th className="py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="px-4 py-2 border-b">{user._id}</td>
                  <td className="px-4 py-2 border-b">
                    {editUserId === user._id ? (
                      <input
                        name="username"
                        value={editFormData.username}
                        onChange={handleInputChange}
                        className="border px-2 py-1"
                      />
                    ) : (
                      user.username
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editUserId === user._id ? (
                      <input
                        name="email"
                        value={editFormData.email}
                        onChange={handleInputChange}
                        className="border px-2 py-1"
                        disabled
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {editUserId === user._id ? (
                      <>
                        <button
                          onClick={handleSave}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditUserId(null)}
                          className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(user._id)}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user._id)}
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
          <h2 className="text-2xl font-bold mb-4">No User Found</h2>
        )}
      </div>
    </div>
  )
}
