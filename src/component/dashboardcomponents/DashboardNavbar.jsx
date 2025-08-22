import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { MessageCircle } from "lucide-react"; // ✅ Import chat icon

const Navbar = () => {
  const navigate = useNavigate();
  const { userlogout } = useContext(UserContext);

  const HandleLogout = () => {
    userlogout();
    navigate("/login");
  };

  const HandleChat = () => {
    navigate("/chat"); // ✅ Navigate to your chat page
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-3">
        {/* Chat Icon */}
        <button
          onClick={HandleChat}
          className="p-2 rounded-full bg-gradient-to-r from-[#625FFF] to-[#9813FA] text-white hover:opacity-90"
        >
          <MessageCircle size={20} />
        </button>

        {/* Logout Button */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={HandleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
