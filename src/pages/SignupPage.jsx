import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function SignupPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef(); // New ref for role
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 const handleSubmit = async (event) => {
  event.preventDefault();

  const email = emailRef.current.value.trim();
  const password = passwordRef.current.value.trim();
  const role = roleRef.current.value;

  if (!email || !password || !role) {
    setError("All fields are required.");
    return;
  }

  const username = email.split('@')[0]; // Auto-generate username

  setLoading(true);
  setError(null);

  console.log(username,email,password,role);
  try {
    const response = await axios.post("https://event-management-backend-indol.vercel.app/users/signup", {
      username,
      email,
      password,
      role,
    });

    const { status, message } = response.data;

    if (status) {
      toast.success(message);
      navigate("/login");
    } else {
      toast.error(message);
    }

  } catch (err) {
    console.error("Signup error:", err);
    if (err.response?.data?.message) {
      setError(err.response.data.message);
    } else {
      setError("Something went wrong. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left section (image/text) omitted for brevity */}
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up to Celebration
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>

            {error && <p className="text-red-500 mt-4">{error}</p>}
            {loading && <p className="text-blue-500 mt-4">Signing up...</p>}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            

              <div>
                <label className="block text-base font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Enter your email"
                  className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-900">Password</label>
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="Enter password"
                  className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Role Dropdown */}
              <div>
                <label className="block text-base font-medium text-gray-900">Role</label>
                <select
                  ref={roleRef}
                  defaultValue=""
                  className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="organizer">Organizer</option>
                  <option value="exhibitor">Exhibitor</option>
                  <option value="attendee">Attendee</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-4 text-white font-semibold rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-90 transition"
                >
                  {loading ? "Signing up..." : "Sign up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
