import { Navigate, useLocation } from 'react-router';

const AuthCheck = ({children}) => {
    
    const isAuthencated = true;
    const location = useLocation();

    if(!isAuthencated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

}

export default AuthCheck;
