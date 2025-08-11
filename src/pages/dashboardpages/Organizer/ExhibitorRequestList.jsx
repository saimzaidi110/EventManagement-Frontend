import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { apiurl } from "../../../api";

const ExhibitorRequestList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch API data
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(`${apiurl}/api/expos`);
        const extractedRequests = res.data
          .flatMap((expo) =>
            expo.exhibitorRequests?.map((req) => ({
              ...req,
              expoTitle: expo.title,
              expoId: expo._id,
            })) || []
          )
          .filter((req) => req.username);
        setRequests(extractedRequests);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load exhibitor requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleApprove = async (expoId, exhibitorId) => {
    try {
      const response = await axios.post(
        `${apiurl}/api/expos/approve-exhibitor`,
        {
          expoId,
          exhibitorRequestId: exhibitorId,
        }
      );

      if (response.status === 200) {
        toast.success("Exhibitor approved successfully!");
        setRequests((prev) =>
          prev.filter((req) => req._id !== exhibitorId)
        );
      } else {
        toast.error("Failed to approve exhibitor.");
      }
    } catch (error) {
      console.error("Error approving exhibitor:", error);
      toast.error("An error occurred while approving.");
    }
  };

  const handleReject = async (expoId, exhibitorId) => {
    try {
      const response = await axios.post(
        `${apiurl}/api/expos/reject-exhibitor`,
        {
          expoId,
          exhibitorRequestId: exhibitorId,
        }
      );

      if (response.status === 200) {
        toast.success("Exhibitor request rejected successfully!");
        setRequests((prev) =>
          prev.filter((req) => req._id !== exhibitorId)
        );
      } else {
        toast.error("Failed to reject exhibitor request.");
      }
    } catch (error) {
      console.error("Error rejecting exhibitor:", error);
      toast.error("An error occurred while rejecting.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">Loading requests...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Expo Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Username
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Company
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Products/Services
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                Documents
              </th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((req) => (
                <tr
                  key={req._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3 text-sm text-gray-700">
                    {req.expoTitle}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700">
                    {req.username}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700">
                    {req.email}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700">
                    {req.companyName}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700">
                    {req.productsServices}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700">
                    {req.documents}
                  </td>
                  <td className="px-6 py-3 text-center space-x-2">
                    <button
                      onClick={() => handleApprove(req.expoId, req._id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm shadow"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(req.expoId, req._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm shadow"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-4 text-center text-gray-500"
                >
                  No exhibitor requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExhibitorRequestList;
