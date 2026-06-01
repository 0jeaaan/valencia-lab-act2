import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");

  if (!token) {
    return <Navigate to="/auth/signin" replace />;
  }

  // If allowedRoles is specified, verify the user has the required role
  if (allowedRoles && allowedRoles.length > 0) {
    let user;
    try {
      user = JSON.parse(userString);
    } catch (error) {
      console.error("Error parsing user data:", error);
      return <Navigate to="/auth/signin" replace />;
    }

    if (!user.role || !allowedRoles.includes(user.role)) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;