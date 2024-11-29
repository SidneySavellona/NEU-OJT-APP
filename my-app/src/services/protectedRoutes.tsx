import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
    user: any;
}

export const ProtectedRoute = ({children, user}: ProtectedRouteProps): JSX.Element | null => {
    if(!user){
        return <Navigate to='/login' />;
    }

    return (children as JSX.Element);
};
