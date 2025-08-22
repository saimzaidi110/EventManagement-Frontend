import { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { apiurl } from "../../api";

export default function LoginPage() {
  const { userlogin } = useContext(UserContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Forgot password state
  const [showForgot, setShowForgot] = useState(false);
  const [step, setStep] = useState(1); // 1 = email, 2 = question
  const [forgotEmail, setForgotEmail] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(apiurl + "/users/login", { email, password });
      let { status, message, user, token } = response.data;

      if (status) {
        toast.success(message);
        userlogin(user);
        localStorage.setItem("token", token);

        if (user?.role !== "attendee") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        toast.error(message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Forgot password Step 1: Get question
  const handleGetQuestion = async () => {
    try {
      const res = await axios.post(apiurl + "/users/forgot-password/question", {
        email: forgotEmail,
      });
      if (res.data.status) {
        setSecurityQuestion(res.data.question);
        setStep(2);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Error fetching security question");
    }
  };

  // Forgot password Step 2: Reset password
  const handleResetPassword = async () => {
    try {
      const res = await axios.post(apiurl + "/users/forgot-password/reset", {
        email: forgotEmail,
        answer,
        newPassword,
      });
      if (res.data.status) {
        toast.success("Password reset successful! Please login.");
        setShowForgot(false);
        setStep(1);
        setForgotEmail("");
        setAnswer("");
        setNewPassword("");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Error resetting password");
    }
  };

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Welcome Back!
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Login to your account
            </p>
          </div>

          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form>
                  <div className="space-y-5">
                    <div>
                      <label className="text-base font-medium text-gray-900"> Email address </label>
                      <input
                        type="email"
                        ref={emailRef}
                        placeholder="Enter email"
                        className="block w-full py-4 px-4 mt-2 border border-gray-200 rounded-md"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label className="text-base font-medium text-gray-900"> Password </label>
                        <button
                          type="button"
                          className="text-sm font-medium text-orange-500 hover:underline"
                          onClick={() => setShowForgot(true)}
                        >
                          Forgot password?
                        </button>
                      </div>
                      <input
                        type="password"
                        ref={passwordRef}
                        placeholder="Enter password"
                        className="block w-full py-4 px-4 mt-2 border border-gray-200 rounded-md"
                      />
                    </div>

                    <div>
                      <button
                        onClick={handleSubmit}
                        className="w-full px-4 py-4 text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700"
                      >
                        {loading ? "Logging in..." : "Log in"}
                      </button>
                    </div>

                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="font-medium text-orange-500 hover:underline">
                          Create a free account
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Forgot Password Modal */}
            {showForgot && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white p-6 rounded-md shadow-md w-96">
                  <h3 className="text-xl font-semibold mb-4">Forgot Password</h3>

                  {step === 1 && (
                    <>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        className="w-full mb-4 px-3 py-2 border rounded"
                      />
                      <button
                        onClick={handleGetQuestion}
                        className="w-full py-2 bg-blue-600 text-white rounded"
                      >
                        Get Security Question
                      </button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <p className="mb-2 font-medium">Security Question:</p>
                      <p className="mb-4 text-gray-700">{securityQuestion}</p>
                      <input
                        type="text"
                        placeholder="Your Answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="w-full mb-3 px-3 py-2 border rounded"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full mb-3 px-3 py-2 border rounded"
                      />
                      <button
                        onClick={handleResetPassword}
                        className="w-full py-2 bg-green-600 text-white rounded"
                      >
                        Reset Password
                      </button>
                    </>
                  )}

                  <button
                    className="mt-4 text-sm text-gray-600 underline"
                    onClick={() => {
                      setShowForgot(false);
                      setStep(1);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
