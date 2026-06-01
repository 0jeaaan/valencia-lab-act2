import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { loginUser } from "../services/UserService";

const SignInPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await loginUser(formData);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      setIsSubmitted(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      // If no response, likely connection refused (server not running / wrong URL)
      if (!error.response) {
        setServerError("Cannot connect to server. Please ensure the API server is running at the configured URL.");
      } else {
        setServerError(error.response?.data?.message || "Invalid email or password");
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>

        <p className="text-gray-600 mt-2">Sign in to continue</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-5">
            <p className="text-green-700 font-medium">
              Successfully signed in!
            </p>
          </div>
        )}

        {serverError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-5">
            <p className="text-red-700 font-medium">{serverError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;  