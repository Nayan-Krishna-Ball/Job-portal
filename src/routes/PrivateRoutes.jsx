//

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
