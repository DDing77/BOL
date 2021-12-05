import { Navigate } from "react-router-dom";
import isLogin from "../isLogin";

const PrivateRoute = ({ children }) => {
  const auth = isLogin();
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
