import { Navigate } from "react-router-dom";
import isLogin from '../isLogin'

const PublicRoute = ({ children}) => {
    const auth = isLogin();
    return (
        auth ? <Navigate to="/"/> : children 
    );
  };
  
  export default PublicRoute;