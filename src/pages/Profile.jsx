//

import { useEffect, useState } from "react";

import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const Profile = () => {
  const { user, setUser } = useAuth();
  const [getme, setGetme] = useState(null);

  const api = useAxios();

  useEffect(() => {
    const getMe = async () => {
      try {
        const response = await api.get("api/auth/me");

        setGetme(response.data.data);
        // console.log("API data:", response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (user?.token) {
      getMe();
    }
  }, [api]);

  return <div>This is profile page</div>;
};

export default Profile;
